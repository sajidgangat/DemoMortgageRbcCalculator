import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'mortgage-summary',
    templateUrl: './mortgage-summary.component.html'
})
export class MortgageSummary implements OnChanges {

    // Term variable
    nOofPayments;
    mortgagePayment;
    prePayment;
    principalPayment;
    interestPayment;
    totalCost;


    // Amortization Period variable
    amortizationnOofPayments;
    amortizationmortgagePayment;
    amortizationprePayment;
    amortizationprincipalPayment;
    amortizationinterestPayment;
    amortizationtotalCost;

    formData = undefined;

    @Input() planFormData: any

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.planFormData.currentValue !== changes.planFormData.previousValue) {
            this.formData = JSON.parse(this.planFormData)
            this.onPlanChange();
        }
    }

    onPlanChange() {
        this.nOofPayments = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.mortgagePayment = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.prePayment = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.principalPayment = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.interestPayment = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.totalCost = Math.floor(Math.random() * this.formData.mortageAmount) + 1;


        // Amortization Period variable
        this.amortizationnOofPayments = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.amortizationmortgagePayment = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.amortizationprePayment = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.amortizationprincipalPayment = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.amortizationinterestPayment = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
        this.amortizationtotalCost = Math.floor(Math.random() * this.formData.mortageAmount) + 1;
    }
}