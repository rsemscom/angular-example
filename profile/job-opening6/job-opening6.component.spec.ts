import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpening6Component } from './job-opening6.component';

describe('JobOpening6Component', () => {
  let component: JobOpening6Component;
  let fixture: ComponentFixture<JobOpening6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOpening6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpening6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
