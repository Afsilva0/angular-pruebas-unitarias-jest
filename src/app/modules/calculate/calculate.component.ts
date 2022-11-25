import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CalculateService } from 'src/app/core/service/calculate.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css'],
})
export class CalculateComponent implements OnInit {
  titulo: string = '';

  form: FormGroup = new FormGroup({
    num1: new FormControl(0, [Validators.required, Validators.maxLength(10)]),
    num2: new FormControl(0, [Validators.required, Validators.maxLength(10)]),
    operation: new FormControl('add', [Validators.required]),
    result: new FormControl(0, [Validators.required]),
  });

  constructor(private calculate: CalculateService) {}

  ngOnInit(): void {
    this.calculate.getTitulo().subscribe({
      next: (titulo) => (this.titulo = titulo),
      error: () => (this.titulo = 'Hubo un error'),
    });
  }

  get num1(): AbstractControl {
    return this.form.get('num1')!;
  }

  get num2(): AbstractControl {
    return this.form.get('num2')!;
  }

  get result(): AbstractControl {
    return this.form.get('result')!;
  }

  get operation(): AbstractControl {
    return this.form.get('operation')!;
  }

  add(): void {
    this.result.setValue(this.calculate.add(this.num1.value, this.num2.value));
  }

  subtract(): void {
    this.result.setValue(
      this.calculate.subtract(this.num1.value, this.num2.value)
    );
  }
  multiply(): void {
    this.result.setValue(
      this.calculate.multiply(this.num1.value, this.num2.value)
    );
  }

  divide(): void {
    this.result.setValue(
      this.calculate.divide(this.num1.value, this.num2.value)
    );
  }

  operar() {
    const operaciones: Map<string, Function> = new Map([]);

    operaciones.set('add', () => this.add());
    operaciones.set('subtract', () => this.subtract());
    operaciones.set('multiply', () => this.multiply());
    operaciones.set('divide', () => this.divide());

    operaciones.get(this.operation.value)!();
  }

  reset(): void {
    this.num1.setValue(0);
    this.num2.setValue(0);
    this.result.setValue(0);
  }
}
