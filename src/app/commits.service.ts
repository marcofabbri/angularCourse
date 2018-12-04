import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommitsModel } from './commits-model';

const BASE_URI = 'https://api.github.com/repos/';
const REPO_NAME = 'angular/angular';
const COMMITS_ENDPOINT = '/commits';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(private httpClient: HttpClient) { }

  public retrieveCommits(): Observable<CommitsModel[]> {
    return this.httpClient.get<CommitsModel[]>(`${BASE_URI}${REPO_NAME}${COMMITS_ENDPOINT}`);
  }
}
