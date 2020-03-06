import { Component, OnInit } from '@angular/core';
import { PhoneService } from '@ngrx-phones/core-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngrx-phones-phones-item',
  templateUrl: './phones-item.component.html',
  styleUrls: ['./phones-item.component.scss']
})
export class PhonesItemComponent implements OnInit {
  _phone$;
  public get phone$() {
    return this._phone$;
  }
  public set phone$(value) {
    this._phone$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private phoneService: PhoneService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.phone$ = this.phoneService.findOne(id);
    });
  }

  goBackToPhones() {
    this.router.navigate(['/phones']);
  }
}
