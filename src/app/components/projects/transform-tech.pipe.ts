import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTech',
})
export class TransformTechPipe implements PipeTransform {
  // use Pure Pipe to prevent re-computing on every re-render
  transform(tech: string[]): string {
    const prefix: string = 'built with';
    const length: number = tech.length;
    if (length == 1) {
      return `${prefix} ${tech[0]}`;
    }
    const front: string[] = tech.slice(0, -1);
    return `${prefix} ${front.join(', ')} and ${tech[length - 1]}`;
  }
}
