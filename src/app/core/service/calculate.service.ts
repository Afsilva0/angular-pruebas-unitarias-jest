import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor() {}

  add(n1: number, n2: number): number {
    return n1 + n2;
  }

  subtract(n1: number, n2: number): number {
    return n1 - n2;
  }

  multiply(n1: number, n2: number): number {
    return n1 * n2;
  }

  divide(n1: number, n2: number): number {
    return n1 / n2;
  }

  getTitulo(): Observable<string> {
    return of('Esto es un Observable');
  }
}
