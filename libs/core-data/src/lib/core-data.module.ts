import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhoneService } from './phones/phones.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PhoneService
  ]
})
export class CoreDataModule {}
