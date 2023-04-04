import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldModule } from '../input-field/input-field.module';
import { ButtonModule } from '../button/button/app-button.module';
import { CreditCardModule } from '../credit-card/credit-card/credit-card.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputFieldModule,
    ButtonModule,
    CreditCardModule
  ],
  exports:[InputFieldModule, ButtonModule, CreditCardModule]
})
export class SharedModule { }
