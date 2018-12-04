import { Component } from '@angular/core';
import { TokenService } from './token.service';
import { CommitsService } from './commits.service';
import { CommitsModel, Commit } from './commits-model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `${environment.title}`;

  public token: string;

  public commits: CommitsModel[];

  constructor(private tokenService: TokenService, private commitsService: CommitsService) {
    this.token = this.tokenService.getToken();
  }

  public hasToken(): boolean {
    return !!this.tokenService.getToken();
  }

  public saveToken(): void {
    this.tokenService.setToken(this.token);
  }

  public retrieveCommits(): void {
    this.commitsService.retrieveCommits().subscribe(commits => this.commits = commits);
  }


  public getPrevUrl(): string {
    return this.commitsService.getPrevUrl();
  }

  public getFirstUrl(): string {
    return this.commitsService.getFirstUrl();
  }

  public getNext(): string {
    return this.commitsService.getNextUrl();
  }

  public getLastPage(): string {
    return this.commitsService.getLastUrl();
  }

  public goToNextPage(): void {
    this.commitsService.retrieveNextPage().subscribe(commits => this.commits = commits);
  }

  public goToLastPage(): void {
    this.commitsService.retrieveLastPage().subscribe(commits => this.commits = commits);
  }

  public goToFirstPage(): void {
    this.commitsService.retrieveFirstPage().subscribe(commits => this.commits = commits);
  }

  public goToPrevPage(): void {
    this.commitsService.retrievePrevPage().subscribe(commits => this.commits = commits);
  }

  public color(commit: CommitsModel): string {
    if (commit && commit.commit && commit.commit.message && commit.commit.message.length > 120) {
      return 'cyan';
    }
    return 'red';
  }
}
