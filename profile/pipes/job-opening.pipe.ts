import { Pipe, PipeTransform } from '@angular/core';
import {JobOpening} from '../../classes/job-opening';

@Pipe({
  name: 'jobOpening'
})
export class JobOpeningPipe implements PipeTransform {

    transform(value: JobOpening[], filterString: string): any {
        return value.filter((technology: JobOpening) => technology.header.search(filterString) !== -1);
    }

}
