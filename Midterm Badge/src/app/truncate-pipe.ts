import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',      // This is the name you use in HTML (e.g., | truncate)
  standalone: true       // Required for Angular 17/18 standalone architecture
})
export class TruncatePipe implements PipeTransform {
  // value: the data being passed in
  // limit: an optional parameter to define where to cut the text
  transform(value: string, limit: number = 100): string {
    if (!value) return '';
    return value.length > limit
      ? value.substring(0, limit) + '...'
      : value;
  }
}
