import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {Interview, STATE_INTERVIEW_APPROVED, STATE_INTERVIEW_REQUESTED} from '../classes/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {
    protected interviews = [];

    constructor() {
        let testData;
        testData = [];

        while (testData.length < 53) {
            const index = testData.length + 1;
            testData.push({
                name: `Interview ${index}`,
                state: (Math.random() < 0.5 ? STATE_INTERVIEW_APPROVED : STATE_INTERVIEW_REQUESTED),
                key: index
            });
        }

        this.interviews = Interview.from(testData);
    }

    findByKey(key): Interview {
        return this.interviews.find(item => item.key === key);
    }


    getAll() {
        return of(this.interviews);
    }

    getAllApproved() {
        return of(this.interviews.filter(item => item.state === STATE_INTERVIEW_APPROVED));
    }

    getAllRequested() {
        return of(this.interviews.filter(item => item.state === STATE_INTERVIEW_REQUESTED));
    }
}
