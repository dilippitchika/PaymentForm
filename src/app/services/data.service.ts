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

    const headers = {
      'Content-Type': 'application/json',
      'imi_bot_middleware_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiVGhpcyBpcyBJTUkgQk9UIG1pZGRsZXdhcmUiLCJpYXQiOjE1Njc4ODc5MTAsImV4cCI6NDE1OTg4NzkxMH0.dYbMaf8HYMD5K532p7DpHN0cmru-JKMjst-WS9zi7u8',
      'proxy_url':"https://rtm.imibot.ai/api/v1/socket/sendMessage",
      "wait_for_response":'true'
    };


    const body = {
      "consumer":{
          "namespace": "BOT",
          "socket_key": uid
      },
      "event":"preview",
      "payload":{
      "generated_msg":[
          {
              "text": "Your payment of JOD 7.87 was successful! Thanks you for choosing Acme Telecom."
          }
      ],
      "language":"en",
      "room":{}
      }
  }

    return this.http.post('https://imi-bot-middleware.herokuapp.com/api/v1/proxy', body, { headers })
      // .catch(this.handleError);
      .pipe(catchError((err) => {
        console.log('Error: Unable to complete request...', err.message);
        return throwError(err);
      }));

  }
}
