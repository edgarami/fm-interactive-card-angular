import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './components/credit-card/credit-card/credit-card.component';
import { CreditCardModule } from './screens/add-creditCard/add-credit-card/credit-card.module';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
