import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';
import { CalculateService } from 'src/app/core/service/calculate.service';

import { CalculateComponent } from './calculate.component';

describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;
  let service: CalculateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateComponent],
      providers: [CalculateService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(CalculateService);
    fixture.detectChanges();
  });

  it('CalculateComponent should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeInstanceOf(CalculateComponent);
  });

  it('CalculateComponent method add', () => {
    const num1 = 1;
    const num2 = 2;
    const resultExpect = 3;
    const spy1 = jest
      .spyOn(service, 'add')
      .mockImplementation(() => resultExpect);

    component.num1.setValue(num1);
    component.num2.setValue(num2);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);

    component.add();

    expect(spy1).toHaveBeenCalled();
    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method subtract', () => {
    const num1 = 7;
    const num2 = 2;
    const resultExpect = 5;
    const spy1 = jest
      .spyOn(service, 'subtract')
      .mockImplementation(() => resultExpect);

    component.num1.setValue(num1);
    component.num2.setValue(num2);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);

    component.subtract();

    expect(spy1).toHaveBeenCalled();
    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method multiply', () => {
    const num1 = 5;
    const num2 = 8;
    const resultExpect = 40;
    const spy1 = jest
      .spyOn(service, 'multiply')
      .mockImplementation(() => resultExpect);

    component.num1.setValue(num1);
    component.num2.setValue(num2);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);

    component.multiply();

    expect(spy1).toHaveBeenCalled();
    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method divide', () => {
    const num1 = 15;
    const num2 = 5;
    const resultExpect = 3;
    const spy1 = jest
      .spyOn(service, 'divide')
      .mockImplementation(() => resultExpect);

    component.num1.setValue(num1);
    component.num2.setValue(num2);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);

    component.divide();

    expect(spy1).toHaveBeenCalled();
    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method reset', () => {
    const num1 = 15;
    const num2 = 5;
    const result = 34;
    const resultExpect = 0;

    component.num1.setValue(num1);
    component.num2.setValue(num2);
    component.result.setValue(result);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);
    expect(component.result.value).toEqual(result);

    component.reset();

    expect(component.num1.value).toEqual(resultExpect);
    expect(component.num2.value).toEqual(resultExpect);
    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method operar whit add', () => {
    const num1 = 15;
    const num2 = 5;
    const operation = 'add';
    const resultExpect = 20;

    component.num1.setValue(num1);
    component.num2.setValue(num2);
    component.operation.setValue(operation);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);
    expect(component.operation.value).toEqual(operation);

    component.operar();

    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method operar whit subtract', () => {
    const num1 = 15;
    const num2 = 5;
    const operation = 'subtract';
    const resultExpect = 10;

    component.num1.setValue(num1);
    component.num2.setValue(num2);
    component.operation.setValue(operation);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);
    expect(component.operation.value).toEqual(operation);

    component.operar();

    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method operar whit multiply', () => {
    const num1 = 15;
    const num2 = 5;
    const operation = 'multiply';
    const resultExpect = 75;

    component.num1.setValue(num1);
    component.num2.setValue(num2);
    component.operation.setValue(operation);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);
    expect(component.operation.value).toEqual(operation);

    component.operar();

    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method operar whit divide', () => {
    const num1 = 15;
    const num2 = 5;
    const operation = 'divide';
    const resultExpect = 3;

    component.num1.setValue(num1);
    component.num2.setValue(num2);
    component.operation.setValue(operation);

    expect(component.num1.value).toEqual(num1);
    expect(component.num2.value).toEqual(num2);
    expect(component.operation.value).toEqual(operation);

    component.operar();

    expect(component.result.value).toEqual(resultExpect);
  });

  it('CalculateComponent method OnInit Observable success', () => {
    const title = 'Esto es un titulo';
    const spy1 = jest
      .spyOn(service, 'getTitulo')
      .mockImplementation(() => of(title));

    component.ngOnInit();

    expect(spy1).toHaveBeenCalled();
    expect(component.titulo).toEqual(title);
  });

  it('CalculateComponent method OnInit Observable fail', () => {
    const title = 'Hubo un error';
    const spy1 = jest
      .spyOn(service, 'getTitulo')
      .mockImplementation(() => throwError(() => Error('ERROR')));

    component.ngOnInit();

    expect(spy1).toHaveBeenCalled();
    expect(component.titulo).toEqual(title);
  });
});
