import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CommitsModel } from './commits-model';
import { map } from 'rxjs/operators';

const BASE_URI = 'https://api.github.com/repos/';
const REPO_NAME = 'angular/angular';
const COMMITS_ENDPOINT = '/commits';
const LINK_HEADER = 'Link';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  private nextUrl: string;
  private lastUrl: string;
  private firstUrl: string;
  private prevUrl: string;

  constructor(private httpClient: HttpClient) { }

  public retrieveCommits(): Observable<CommitsModel[]> {
    return this.doRetrieveCommits(`${BASE_URI}${REPO_NAME}${COMMITS_ENDPOINT}`);
  }

  public retrieveNextPage(): Observable<CommitsModel[]> {
    return this.doRetrieveCommits(this.nextUrl);
  }

  public retrievePrevPage(): Observable<CommitsModel[]> {
    return this.doRetrieveCommits(this.prevUrl);
  }

  public retrieveFirstPage(): Observable<CommitsModel[]> {
    return this.doRetrieveCommits(this.firstUrl);
  }

  public retrieveLastPage(): Observable<CommitsModel[]> {
    return this.doRetrieveCommits(this.lastUrl);
  }

  public getNextUrl(): string {
    return this.nextUrl;
  }

  public getLastUrl(): string {
    return this.lastUrl;
  }
  public getPrevUrl(): string {
    return this.prevUrl;
  }

  public getFirstUrl(): string {
    return this.firstUrl;
  }

  private doRetrieveCommits(url: string) {
    return this.httpClient.get<CommitsModel[]>(url, { observe: 'response' }).pipe(
      map(resp => {
        const linkHeader = resp.headers.get(LINK_HEADER);
        const links: string[] = linkHeader.split(',');
        links.forEach(l => {
          const linkUrl = l.split(';')[0].replace(/[<>]/g, '');
          const linkRel = l.split(';')[1];
          if (linkRel.indexOf('next') !== -1) {
            this.nextUrl = linkUrl;
          } else if (linkRel.indexOf('prev') !== -1) {
            this.prevUrl = linkUrl;
          } else if (linkRel.indexOf('last') !== -1) {
            this.lastUrl = linkUrl;
          } else if (linkRel.indexOf('first') !== -1) {
            this.firstUrl = linkUrl;
          }
        });
        return resp.body;
      })
    );
  }
}
