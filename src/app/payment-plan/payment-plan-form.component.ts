import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'payment-plan-form',
    templateUrl: './payment-plan-form.component.html'
})
export class PaymentPlanForm {

    ngForm
    interestList: any = ['1', '2', '3'];
    frequencyList: any = ['Accelerated Weekly', 'Weekly', 'Accelerated Bi-weekly', 'Bi-Weekly (every 2 weeks)', 'Semi-monthly (24x per year)', 'Monthly (12x per year)']
    termList = ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years', '6 Years', '7 Years', '8 Years', '9 Years', '10 Years'];
    prePaymentList = ['One time', 'Each year', 'Same as regular payment'];
    showError = false;
    planForm = {
        mortageAmount: "",
        interestRate: "",
        period: "",
        paymentFrequency: "",
        term: "",
        prePaymentAmount: "",
        prePayemntFrequency: "",
        startWithPayment: ""
    }

    @Output() onChange = new EventEmitter()

    isSubmit = false;

    constructor() {

    }

    submit() {
        if (Number(this.planForm.mortageAmount) >= Number(this.planForm.prePaymentAmount)) {
            this.onChange.emit(JSON.stringify(this.planForm))
            this.showError = false;
        } else {
            this.showError = true;
        }

        this.isSubmit = true;
    }
}