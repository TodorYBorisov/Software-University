import { TestBed } from '@angular/core/testing';

import { GloabalLoaderService } from './gloabal-loader.service';

describe('GloabalLoaderService', () => {
  let service: GloabalLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GloabalLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
