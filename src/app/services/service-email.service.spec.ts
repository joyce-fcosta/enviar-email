import { TestBed } from '@angular/core/testing';

import { ServiceEmailService } from './service-email.service';

describe('ServiceEmailService', () => {
  let service: ServiceEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
