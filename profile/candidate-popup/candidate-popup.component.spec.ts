import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePopupComponent } from './candidate-popup.component';

describe('CandidatePopupComponent', () => {
  let component: CandidatePopupComponent;
  let fixture: ComponentFixture<CandidatePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
