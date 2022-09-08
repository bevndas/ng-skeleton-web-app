import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {environment} from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  static createFormData(params: any): HttpParams {
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        if (params[key] instanceof Array) {
          const newArray = params[key];
          for (let i = 0; i < newArray.length; i++) {
            if (typeof newArray[i] === 'object') {
              objectParse(newArray[i], key + '[' + i + ']');
            }
            if (typeof newArray[i] !== 'object') {
              httpParams = httpParams.set(
                key + '[' + i + ']',
                newArray[i]
              );
            }
          }
        } else if (typeof params[key] === 'object') {
          objectParse(params[key], key);
        } else {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    function objectParse(param: any, firstkey: any) {
      for (const key in param) {
        if (param.hasOwnProperty(key)) {
          if (typeof param[key] === 'object') {
            const newObject = param[key];
            for (const newKey in newObject) {
              if (newObject.hasOwnProperty(newKey)) {
                httpParams = httpParams.set(
                  firstkey +
                  '[' +
                  key +
                  ']' +
                  '[' +
                  newKey +
                  ']',
                  newObject[newKey]
                );
              }
            }
          } else {
            httpParams = httpParams.set(
              firstkey + '[' + key + ']',
              param[key]
            );
          }
        }
      }
    }
    return httpParams;
  }

  get(url: string): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}${url}`)
      .pipe(catchError(this.handlerError()));
  }

  post(url: string, params: any) {
    return this.http
      .post(`${environment.apiUrl}${url}`, params)
      .pipe(catchError(this.handlerError()));
  }

  put(url: string, params: any) {
    return this.http
      .put(`${environment.apiUrl}${url}`, params)
      .pipe(catchError(this.handlerError()));
  }

  del(url: string) {
    return this.http
      .get(`${environment.apiUrl}${url}`)
      .pipe(catchError(this.handlerError()));
  }


  private handlerError() {
    return (error: HttpErrorResponse): Observable<any> => throwError(error);
  }
}
