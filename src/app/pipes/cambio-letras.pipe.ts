import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string): string {
    const valueArray = value.split('').map(val => {
      if(val === 'a' || val === 'A') return '4';
      if(val === 'e' || val === 'E') return '3';
      if(val === 'i' || val === 'I') return '1';
      if(val === 'o' || val === 'O') return '0';
      if(val === 'u' || val === 'U') return '9';
      return val;
    });

    return valueArray.join('');
  }

}
