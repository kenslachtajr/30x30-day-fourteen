import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesItemComponent } from './phones-item.component';

describe('PhonesItemComponent', () => {
  let component: PhonesItemComponent;
  let fixture: ComponentFixture<PhonesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
