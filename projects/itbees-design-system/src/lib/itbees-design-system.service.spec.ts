import { TestBed } from '@angular/core/testing';

import { ItbeesDesignSystemService } from './itbees-design-system.service';

describe('ItbeesDesignSystemService', () => {
  let service: ItbeesDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItbeesDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
