import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() btnClick :EventEmitter<Event>  = new EventEmitter<Event>();


  onClick(){
    this.btnClick.emit();
  }
}
