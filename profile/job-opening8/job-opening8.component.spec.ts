import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpening8Component } from './job-opening8.component';

describe('JobOpening8Component', () => {
  let component: JobOpening8Component;
  let fixture: ComponentFixture<JobOpening8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOpening8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpening8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
