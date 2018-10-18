import { Pipe, PipeTransform } from '@angular/core';
import {Area} from './../../classes/area';

@Pipe({
  name: 'areaFilter'
})
export class AreaFilterPipe implements PipeTransform {

    transform(value: Area[], filterString: string): any {
        return value.filter((area: Area) => area.name.search(filterString) !== -1);
    }

}
