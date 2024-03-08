import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capFirst',
})
export class CapFirstPipe implements PipeTransform {
  transform(word: string): string {
    if(!word) return word

    return word[0].toUpperCase() + word.substring(1).toLowerCase()
  }
}
