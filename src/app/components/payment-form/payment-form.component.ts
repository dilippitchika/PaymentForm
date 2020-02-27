import { Component, OnInit } from '@angular/core';
import { IPaymentSettings } from '../../data/payment-settings';
import { NgForm, NgModel } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  originalPaymentSettings: IPaymentSettings = {
    item: null,
    quantity: null,
    price: null,
    couponCode: null,
    serviceTax: null,
    firstName: null,
    lastName: null,
    email: null,
    creditCardNumber: null,
    creditCardExpiryMonth: null,
    creditCardExpiryYear: null,
    cvvCode: null,
    isCardAddressSameAsBillingAddress: null,
    isTermsAndConditionsAgreed: null
  };

  itemName = 'Basic Plan';
  itemQuantity = 1;
  itemPrice = 7.87;
  paymentSettings = { ...this.originalPaymentSettings };
  postError = false;
  postErrorMessage = '';

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  uid: string;

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    console.log(form);
    if (form.valid) {
      this.dataService.postPaymentSettingsForm(this.uid).subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onHttpError(errorResponse: any) {
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  ngOnInit() {
    // this.itemName = this.paymentSettings.item;
    // this.itemQuantity = this.paymentSettings.quantity;
    // this.itemPrice = this.paymentSettings.price;
    console.log(this.itemName, this.itemQuantity);
    this.uid = this.route.snapshot.params['uid'];
    console.log("uid" + this.uid);
  }
}

