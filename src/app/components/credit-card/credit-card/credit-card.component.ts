import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  str = "0000000000000000";
  cardNumberToShow : any

  @Input() set srcBack(value:string){
    this._srcBack = value
  }
  _srcBack: string = '';

  @Input() set srcFront(value:string){
    this._srcFront = value
  }
  _srcFront: string = '';

  @Input() set alt(value:string){
    this._alt = value
  }
  _alt: string = '';



  constructor() { }

  ngOnInit(): void {
    this.splitCardNumber(this.str)
  }

  splitCardNumber(numberCard : string){

    this.cardNumberToShow = numberCard.match(/.{1,4}(.$)?/g);
    console.log(this.cardNumberToShow)

  }

}
