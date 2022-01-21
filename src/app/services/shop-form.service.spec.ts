import { TestBed } from '@angular/core/testing';

import { shopFormService } from './shop-form.service';

describe('Luv2ShopFormService', () => {
  let service: shopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(shopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
