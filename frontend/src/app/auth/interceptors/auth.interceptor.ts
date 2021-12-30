import { Injectable, Type } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationFacade } from '../auth.facade';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authFacade: AuthenticationFacade) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.authFacade.getToken();

    const authReq = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`),
    });
    return next.handle(authReq);
  }
}
