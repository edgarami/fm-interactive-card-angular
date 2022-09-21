import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldModule } from '../input-field/input-field.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputFieldModule
  ],
  exports:[InputFieldModule]
})
export class SharedModule { }
