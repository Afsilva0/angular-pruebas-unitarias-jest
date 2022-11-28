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
    expect(total).toBe(3);
  });

  it('CalculateService subtract', () => {
    const total = service.subtract(7, 2);
    expect(total).toBe(5);
  });

  it('CalculateService multiply', () => {
    const total = service.multiply(5, 8);
    expect(total).toBe(40);
  });

  it('CalculateService divide', () => {
    const total = service.divide(15, 3);
    expect(total).toBe(5);
  });

  /*
   * Si se utiliza xit se desabilita esta prueba
   * De la misma forma si se usa xdescribe se desabilita
   * todo los test que estan en el describe
   */
  xit('Prueba disable it', () => {});

  /*
   * Si se utilixa it.only o fit solo se lanzara ese test
   * Tambien exite los fdescribe y describe.only
   */

  /* 
  it.only('Se ejecutara solo este test', () => {});
  fit('Se ejecutara solo este test', () => {});
  */
});
