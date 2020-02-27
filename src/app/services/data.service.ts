import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPaymentSettings } from '../data/payment-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getSubscriptionTypes(): Observable<string[]> {
  //   return of(['Monthly', 'Annual', 'Lifetime']);
  // }

  postPaymentSettingsForm(paymentSettings: IPaymentSettings): Observable<any> {

    return of(paymentSettings);

  }
}
