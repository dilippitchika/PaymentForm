import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPaymentSettings } from '../data/payment-settings';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getSubscriptionTypes(): Observable<string[]> {
  //   return of(['Monthly', 'Annual', 'Lifetime']);
  // }

  postPaymentSettingsForm(uid: string) {

    const headers = { 'bot-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzMwLCJyb2xlIjoiYm90In0.ea4Ge6I5uGjW6j7ZICTsJ1BBJFKS-mWYTAwrXacm0-I', 'Content-type': 'application/json' };


    const body = {
      'consumer': { 'uid': uid }, 'msg': '123bps123',
      'platform': 'web',
      'type': 'human'
    };

    return this.http.post('https://imibot.ai/api/v1/webhook/web/', body, { headers })
      // .catch(this.handleError);
      .pipe(catchError((err) => {
        console.log('Error: Unable to complete request...', err.message);
        return throwError(err);
      }));

  }
}
