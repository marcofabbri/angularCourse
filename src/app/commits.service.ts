import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URI = 'https://api.github.com/repos/';
const REPO_NAME = 'angular/angular';
const COMMITS_ENDPOINT = '/commits';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(private httpClient: HttpClient) { }

  public retrieveCommits(): Observable<any> {
    return this.httpClient.get(`${BASE_URI}${REPO_NAME}${COMMITS_ENDPOINT}`);
  }
}
