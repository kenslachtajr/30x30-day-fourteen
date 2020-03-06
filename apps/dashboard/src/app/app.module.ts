import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';

import { MaterialModule } from '@ngrx-phones/material';
import { CoreDataModule } from '@ngrx-phones/core-data';
import { UiLibraryModule } from '@ngrx-phones/ui-library';
import { CoreStateModule } from '@ngrx-phones/core-state';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhonesItemComponent } from './phones/phones-item/phones-item.component';
import { PhonesDetailsComponent } from './phones/phones-details/phones-details.component';
import { PhonesListComponent } from './phones/phones-list/phones-list.component';
import { PhonesComponent } from './phones/phones.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  declarations: [
    AppComponent,
    PhonesItemComponent,
    PhonesDetailsComponent,
    PhonesListComponent,
    PhonesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
