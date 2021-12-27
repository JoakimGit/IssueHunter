import { Injectable } from '@angular/core';
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
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    /* const authReq = request.clone({
      headers: request.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`),
    }); */
    console.log('TOKEN: ' + token);

    console.log('REQUEST' + JSON.stringify(authReq));

    return next.handle(authReq);
  }
}
