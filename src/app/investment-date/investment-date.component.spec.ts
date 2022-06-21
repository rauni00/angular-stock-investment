import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDateComponent } from './investment-date.component';

describe('InvestmentDateComponent', () => {
  let component: InvestmentDateComponent;
  let fixture: ComponentFixture<InvestmentDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
