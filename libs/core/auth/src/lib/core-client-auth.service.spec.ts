import { TestBed } from '@angular/core/testing';

import { CoreClientAuthService } from './core-client-auth.service';

describe('CoreClientAuthService', () => {
  let service: CoreClientAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreClientAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
