import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCreditCardComponent } from './screens/add-creditCard/add-credit-card/add-credit-card.component';

const routes: Routes = [{
  path:'',
  component:AddCreditCardComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
