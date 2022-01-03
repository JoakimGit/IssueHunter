import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpEventType,
} from '@angular/common/http';
import { finalize, map, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // return next.handle(request);
    this.loadingService.show();
    return next.handle(request).pipe(
      map((event: any) => {
        if (event instanceof HttpResponse) {
          this.loadingService.hide();
        }
        return event;
      })
    );
  }
}
