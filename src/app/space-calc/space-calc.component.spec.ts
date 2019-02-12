import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCalcComponent } from './space-calc.component';

describe('SpaceCalcComponent', () => {
  let component: SpaceCalcComponent;
  let fixture: ComponentFixture<SpaceCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
