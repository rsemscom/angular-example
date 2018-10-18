import { TestBed, inject } from '@angular/core/testing';

import { ExpertisesService } from './expertises.service';

describe('ExpertisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpertisesService]
    });
  });

  it('should be created', inject([ExpertisesService], (service: ExpertisesService) => {
    expect(service).toBeTruthy();
  }));
});
