/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegisterDataService } from './registerData.service';

describe('Service: RegisterData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterDataService]
    });
  });

  it('should ...', inject([RegisterDataService], (service: RegisterDataService) => {
    expect(service).toBeTruthy();
  }));
});
