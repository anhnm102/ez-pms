import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class QuoteService {
  constructor(private httpClient: HttpClient) {}

  getRandomQuote(): Observable<string> {
    return this.httpClient
      .cache()
      .get('/quotes')
      .pipe(
        map((body: any) => body.value),
        catchError(() => of('Error, could not load joke :-('))
      );
  }
}
