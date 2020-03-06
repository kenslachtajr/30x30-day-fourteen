import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from './phone';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  model = 'phones';

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  findOne(phone: Phone) {
    return this.httpClient.get(this.getUrlForId(phone));
  }

  create(phone: Phone) {
    return this.httpClient.post(this.getUrl(), phone);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(phone: Phone) {
    return this.httpClient.patch(this.getUrlForId(phone.id), phone);
  }

  delete(phone: Phone) {
    return this.httpClient.delete(this.getUrlForId(phone.id));
  }
}
