import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Industry} from '../classes/industry';


const MAX_INDUSTRY_COUNT = 3;

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {
    picked = [];
    protected industrys = [];

    constructor() {
        let testData;
        testData = [];

        while (testData.length < 23) {
            const index = testData.length + 1;
            testData.push({name: `Industry ${index}`, key: index});
        }

        this.industrys = Industry.from(testData);
    }

    findByKey(key): Industry {
        return this.industrys.find(item => item.key === key);
    }

    setPicked(key, force = null) {
        let industry = this.findByKey(key);

        if (!industry) {
            return;
        }

        if (force !== null && industry.picked === force) {
            return;
        }

        force = !industry.picked;


        if (force) {
            this.picked.push(key);

            if (this.picked.length > MAX_INDUSTRY_COUNT) {
                let firstKey = this.picked[0];
                this.picked.splice(0, 1);
                this.findByKey(firstKey).picked = false;
            }

        } else {
            let id = this.picked.findIndex(key);
            this.picked.splice(id, 1);
        }

        industry.picked = force;

    }


    getAll() {
        return of(this.industrys);
    }
}
