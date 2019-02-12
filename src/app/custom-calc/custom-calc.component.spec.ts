import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCalcComponent } from './custom-calc.component';

describe('CustomCalcComponent', () => {
  let component: CustomCalcComponent;
  let fixture: ComponentFixture<CustomCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
