import { Injectable } from '@angular/core';

const GITHUB_TOKEN = 'github-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem(GITHUB_TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(GITHUB_TOKEN);
  }

}
