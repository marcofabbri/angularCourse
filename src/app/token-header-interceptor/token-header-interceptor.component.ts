import { Component, OnInit } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token-header-interceptor',
  templateUrl: './token-header-interceptor.component.html',
  styleUrls: ['./token-header-interceptor.component.css']
})
export class TokenHeaderInterceptorComponent implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `token ${token}`
        }
      });
    }
    return next.handle(request);
  }

}
