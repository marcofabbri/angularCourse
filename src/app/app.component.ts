import { Component } from '@angular/core';
import { TokenService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular course';

  public token: string;

  constructor(private tokenService: TokenService) {

  }

  public hasToken(): boolean {
    return !!this.tokenService.getToken();
  }

  public saveToken(): void {
    this.tokenService.setToken(this.token);
  }
}
