import { Pipe, PipeTransform } from '@angular/core';
import {Interview} from '../../classes/interview';

@Pipe({
  name: 'interview'
})
export class InterviewPipe implements PipeTransform {

    transform(value: Interview[], filterString: string): any {
        return value.filter((interview: Interview) => interview.name.search(filterString) !== -1);
    }

}
