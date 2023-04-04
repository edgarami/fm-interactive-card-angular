import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

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
  }

}
