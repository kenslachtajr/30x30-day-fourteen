import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Phone, NotifyService, emptyPhone } from '@ngrx-phones/core-data';
import { PhonesFacade } from '@ngrx-phones/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngrx-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  form: FormGroup;
  selectedPhone: Phone;
  phones$: Observable<Phone[]> = this.phonesFacade.allPhones$;

  constructor(
    private phonesFacade: PhonesFacade,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.phonesFacade.loadPhones();
    this.phonesFacade.mutations$.subscribe(() => this.resetPhone());
  }

  resetPhone() {
    this.form.reset();
    this.selectPhone(emptyPhone);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  selectPhone(phone: Phone) {
    this.phonesFacade.selectPhone(phone.id);
    this.form.patchValue(phone);
  }

  createPhone() {
    this.notify.notification(`You have create ${this.form.value.brand}`);
    this.phonesFacade.createPhone(this.form.value);
  }

  updatePhone() {
    this.notify.notification(`You have updated ${this.form.value.brand}`);
    this.phonesFacade.updatePhone(this.form.value);
  }

  savePhone(phone: Phone) {
    if (phone.id) {
      this.updatePhone();
    } else {
      this.createPhone();
    }
  }

  deletePhone(phone: Phone) {
    this.notify.notification(`You have deleted ${phone.name}`);
    this.phonesFacade.deletePhone(phone);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      brand: ['', Validators.compose([Validators.required])],
      name: ['', Validators.compose([Validators.required])]
    });
  }
}
