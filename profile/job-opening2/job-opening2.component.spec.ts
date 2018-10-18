import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpening2Component } from './job-opening2.component';

describe('JobOpening2Component', () => {
  let component: JobOpening2Component;
  let fixture: ComponentFixture<JobOpening2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOpening2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpening2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
