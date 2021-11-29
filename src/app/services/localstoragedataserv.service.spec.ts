import { TestBed } from '@angular/core/testing';

import { LocalstoragedataservService } from './localstoragedataserv.service';

describe('LocalstoragedataservService', () => {
  let service: LocalstoragedataservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstoragedataservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
