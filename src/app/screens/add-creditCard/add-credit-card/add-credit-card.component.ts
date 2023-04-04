import { Component, OnInit } from '@angular/core';
// import { } from './../../../../assets/images/images/bg-card-back.png'

@Component({
  selector: 'add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.scss']
})
export class AddCreditCardComponent implements OnInit {
  onClickConfirm(){
    console.log('confirm')
  }

  _srcFront = './../../../../assets/images/bg-card-front.png';
  _srcBack = './../../../../assets/images/bg-card-back.png';

  constructor() { }

  ngOnInit(): void {
  }

}
