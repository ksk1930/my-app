import { TestBed } from '@angular/core/testing';

import { ICICIService } from './icici.service';

describe('ICICIService', () => {
  let service: ICICIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ICICIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
