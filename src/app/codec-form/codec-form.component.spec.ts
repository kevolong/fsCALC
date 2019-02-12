import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecFormComponent } from './codec-form.component';

describe('CodecFormComponent', () => {
  let component: CodecFormComponent;
  let fixture: ComponentFixture<CodecFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodecFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
