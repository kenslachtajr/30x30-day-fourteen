import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '@ngrx-phones/core-data';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngrx-phones-phones-details',
  templateUrl: './phones-details.component.html',
  styleUrls: ['./phones-details.component.scss']
})
export class PhonesDetailsComponent {
  @Input() set phone(value) {
    if (value) this.originalTitle = value.title;
    this.currentPhone = Object.assign({}, value);
  }
  @Input() form: FormGroup;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  currentPhone: Phone;
  originalTitle;
}
