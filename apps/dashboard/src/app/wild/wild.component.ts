import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngrx-phones-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss']
})
export class WildComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirectToPhones() {
    this.router.navigate(['/phones']);
  }
}
