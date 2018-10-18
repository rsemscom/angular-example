import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpeningComponent } from './job-opening.component';

describe('JobOpeningComponent', () => {
  let component: JobOpeningComponent;
  let fixture: ComponentFixture<JobOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
