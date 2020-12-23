/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrderDataService } from './OrderData.service';

describe('Service: OrderData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderDataService]
    });
  });

  it('should ...', inject([OrderDataService], (service: OrderDataService) => {
    expect(service).toBeTruthy();
  }));
});
