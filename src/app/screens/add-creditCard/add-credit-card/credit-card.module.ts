import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCreditCardComponent } from './add-credit-card.component';
import { SharedModule } from 'src/app/components/shared/shared.module';



@NgModule({
  declarations: [AddCreditCardComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CreditCardScreenModule { }
