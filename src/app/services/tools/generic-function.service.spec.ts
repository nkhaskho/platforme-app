import { TestBed } from '@angular/core/testing';

import { GenericFunctionService } from './generic-function.service';

describe('GenericFunctionService', () => {
  let service: GenericFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
