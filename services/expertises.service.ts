import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Expertise} from '../classes/expertise';


export const MAX_EXPERTISE_COUNT = 3;

@Injectable({
    providedIn: 'root'
})
export class ExpertisesService {

    picked = [];
    protected expertises = [];

    constructor() {
        let testData;
        testData = [];

        while (testData.length < 23) {
            const index = testData.length + 1;
            testData.push({name: `Expertise ${index}`, key: index});
        }

        this.expertises = Expertise.from(testData);
    }

    findByKey(key): Expertise {
        return this.expertises.find(item => item.key === key);
    }

    setPicked(key, force = null) {
        let expertise = this.findByKey(key);

        if (!expertise) {
            return;
        }

        if (force !== null && expertise.picked === force) {
            return;
        }

        force = !expertise.picked;


        if (force) {
            this.picked.push(key);

            if (this.picked.length > MAX_EXPERTISE_COUNT) {
                let firstKey = this.picked[0];
                this.picked.splice(0, 1);
                this.findByKey(firstKey).picked = false;
            }

        } else {
            let id = this.picked.findIndex(key);
            this.picked.splice(id, 1);
        }

        expertise.picked = force;

    }


    getAll() {
        return of(this.expertises);
    }

}
