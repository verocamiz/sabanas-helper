import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFase3',
  standalone: true
})
export class FormatFase3Pipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value.replace(/^(fuego|agua|tierra|aire)(maldit[oa])$/i, '$1 $2');
  }
}
