import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
