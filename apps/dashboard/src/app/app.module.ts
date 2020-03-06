import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PhonesComponent } from './phones/phones.component';
import { PhonesDetailsComponent } from './phones/phones-details/phones-details.component';
import { PhonesListComponent } from './phones/phones-list/phones-list.component';
import { PhonesItemComponent } from './phones/phones-item/phones-item.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  declarations: [AppComponent, PhonesComponent, PhonesDetailsComponent, PhonesListComponent, PhonesItemComponent, WildComponent],
  imports: [BrowserModule, NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
