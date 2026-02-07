import { TestBed } from '@angular/core/testing';

import { NavesServiceService } from './naves-service.service';

describe('NavesServiceService', () => {
  let service: NavesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
