import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpening7Component } from './job-opening7.component';

describe('JobOpening7Component', () => {
  let component: JobOpening7Component;
  let fixture: ComponentFixture<JobOpening7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOpening7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpening7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
