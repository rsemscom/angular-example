import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpening5Component } from './job-opening5.component';

describe('JobOpening5Component', () => {
  let component: JobOpening5Component;
  let fixture: ComponentFixture<JobOpening5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOpening5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpening5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
