import { Component } from '@angular/core';
import { TokenService } from './token.service';
import { CommitsService } from './commits.service';
import { CommitsModel } from './commits-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular course';

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
}
