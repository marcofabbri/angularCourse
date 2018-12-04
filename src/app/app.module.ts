import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TokenHeaderInterceptorComponent } from './token-header-interceptor/token-header-interceptor.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenHeaderInterceptorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHeaderInterceptorComponent,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
