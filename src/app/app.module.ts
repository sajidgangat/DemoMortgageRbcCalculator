import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from '../app/numbers-only.directive';
import { PaymentPlanForm } from "./payment-plan/payment-plan-form.component";
import { MortgageSummary } from "./mortgage-summary/mortgage-summary.component";

@NgModule({
  declarations: [
    AppComponent,
    NumberDirective,
    PaymentPlanForm,
    MortgageSummary
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
