import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpening3Component } from './job-opening3.component';

describe('JobOpening3Component', () => {
  let component: JobOpening3Component;
  let fixture: ComponentFixture<JobOpening3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOpening3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpening3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
