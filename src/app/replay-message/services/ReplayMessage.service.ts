import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class messageservice {

  constructor(@Inject(HttpClient) private http: HttpClient) { }

  getAllMessages(fileName): Observable<any> {
    return this.http.get<any>('/test-dev/' + fileName)
      .pipe(catchError(err => throwError(err)));
  }

}

