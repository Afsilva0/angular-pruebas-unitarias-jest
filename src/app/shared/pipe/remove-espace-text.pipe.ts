import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeEspaceText',
})
export class RemoveEspaceTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.replace(' ', '');
  }
}
