import {Injectable} from '@angular/core';
import {
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import {Router} from "@angular/router";
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {environment} from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.handle(req, next);
  }

  private setRequestHeaders(request: HttpRequest<any>) {
    const headerObject = {};
    if (request.method === 'POST' && !(request.body instanceof FormData)) {
      // @ts-ignore
      headerObject['Content-type'] = 'application/x-www-form-urlencoded';
    }
    if (request.method === 'GET') {
      // @ts-ignore
      headerObject['Content-type'] = 'application/json';
    }
    if (request.url.indexOf(environment.apiUrl) !== -1) {
      // *** If request are made after authentication add Token  on respective headers *** //
    }
    const headers = new HttpHeaders(headerObject);
    return request.clone({headers});
  }

  private handle(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(this.setRequestHeaders(req))
      .pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        catchError((HttpError: HttpErrorResponse) => {
          const isTokenInvalid = HttpError.error.code === -83 || HttpError.error.code === -84 || HttpError.error.code === -85;
          if (HttpError.status === 401 && isTokenInvalid) {
            // handle invalid user
            return throwError(HttpError.error);
          }
          if (!environment.production) {
            console.log(HttpError);
          }
          return throwError(HttpError.error);
        })
      );
  }
}
