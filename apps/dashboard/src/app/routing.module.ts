import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from '@ngrx-phones/ui-library';
import { PhonesComponent } from './phones/phones.component';
import { PhonesItemComponent } from './phones/phones-item/phones-item.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'phones/:id', component: PhonesItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
