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
    const total = service.subtract(7, 2);
    expect(total).toEqual(5);
  });

  it('CalculateService multiply', () => {
    const total = service.multiply(5, 8);
    expect(total).toEqual(40);
  });

  it('CalculateService divide', () => {
    const total = service.divide(15, 3);
    expect(total).toEqual(5);
  });
});
