import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
// import { RatingModule } from 'ngx-bootstrap/rating';
import { AppRoutingModule } from './app-routing.module';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // ButtonsModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // TimepickerModule.forRoot(),
    // RatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
