import { Pipe, PipeTransform } from '@angular/core';
import {Technology} from '../../classes/technology';

@Pipe({
  name: 'technologiesFilter'
})
export class TechnologiesFilterPipe implements PipeTransform {

    transform(value: Technology[], filterString: string): any {
        return value.filter((technology: Technology) => technology.name.search(filterString) !== -1);
    }
}
