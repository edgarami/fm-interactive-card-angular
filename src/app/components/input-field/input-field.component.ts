import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent implements OnInit {
  _type = 'text';
  @Input() label = '';
  @Input() type = 'text';
  @Input() maxlength! : number;
  @Input() pattern = '';
  @Input() placeholder = '';
  @Input() disabled = false;







  constructor() {}

  ngOnInit(): void {}
}
