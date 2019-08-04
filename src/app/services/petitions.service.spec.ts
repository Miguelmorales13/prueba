import { TestBed } from '@angular/core/testing';

import { PetitionsService } from './petitions.service';

describe('PetitionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetitionsService = TestBed.get(PetitionsService);
    expect(service).toBeTruthy();
  });
});
