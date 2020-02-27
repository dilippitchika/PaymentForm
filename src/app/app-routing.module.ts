import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';


const routes: Routes = [
  { path: 'payment', component: PaymentFormComponent },
  { path: '', redirectTo: 'payment', pathMatch: 'full' },
  { path: '**', redirectTo: 'payment', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
