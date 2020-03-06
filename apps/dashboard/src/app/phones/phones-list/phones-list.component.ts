import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Phone } from '@ngrx-phones/core-data';

@Component({
  selector: 'ngrx-phones-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.scss']
})
export class PhonesListComponent {
  @Input() phones: Phone[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
