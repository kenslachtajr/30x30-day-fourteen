import { Component } from '@angular/core';

@Component({
  selector: 'ngrx-phones-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Phones App';

  links = [
    { path: '/phones', icon: 'work', title: 'Phones' },
  ]
}
