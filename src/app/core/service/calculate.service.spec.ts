import { TestBed } from '@angular/core/testing';

import { CalculateService } from './calculate.service';

describe('CalculateService', () => {
  let service: CalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('CalculateService add', () => {
    const total = service.add(1, 2);
    expect(total).toEqual(3);
  });

  it('CalculateService subtract', () => {
    expect(service.subtract(7, 2)).toEqual(5);
  });
});
