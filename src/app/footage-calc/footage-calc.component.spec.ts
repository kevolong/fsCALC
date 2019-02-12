import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootageCalcComponent } from './footage-calc.component';

describe('FootageCalcComponent', () => {
  let component: FootageCalcComponent;
  let fixture: ComponentFixture<FootageCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootageCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootageCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
