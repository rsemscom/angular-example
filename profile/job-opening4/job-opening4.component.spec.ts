import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpening4Component } from './job-opening4.component';

describe('JobOpening4Component', () => {
  let component: JobOpening4Component;
  let fixture: ComponentFixture<JobOpening4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOpening4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpening4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
