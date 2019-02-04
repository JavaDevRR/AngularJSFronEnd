import { TestBed } from '@angular/core/testing';

import { WebContentServiceService } from './web-content-service.service';

describe('WebContentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebContentServiceService = TestBed.get(WebContentServiceService);
    expect(service).toBeTruthy();
  });
});
