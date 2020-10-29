import { TestBed } from '@angular/core/testing';

import { MovieslistService } from './movieslist.service';

describe('MovieslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieslistService = TestBed.get(MovieslistService);
    expect(service).toBeTruthy();
  });
});
