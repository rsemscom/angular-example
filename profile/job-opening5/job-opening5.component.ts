import { Component, OnInit } from '@angular/core';
import {NavItem} from '../../classes/nav-item';
import {STATE_MUST_HAVE, STATE_NICE_TO_HAVE, STATE_UNPICKED, Technology} from '../../classes/technology';
import {TechnologiesService} from '../../services/technologies.service';

@Component({
  selector: 'app-job-opening5',
  templateUrl: './job-opening5.component.html',
  styleUrls: ['./job-opening5.component.scss']
})
export class JobOpening5Component implements OnInit {

    public variants = [];
    public filter = '';


    constructor(public _technologiesService: TechnologiesService) {
        this.variants[STATE_NICE_TO_HAVE] = 'Nice to have';
        this.variants[STATE_MUST_HAVE] = 'Must have';
        this.variants[STATE_UNPICKED] = 'Don`t need';
    }

    get technologies() {
        return this._technologiesService.getAll();
    }

    get leftLink() {
        return <NavItem> {
            link: '/job-opening/step6',
            label: 'skip'
        };
    }
    get rightLink() {
        return <NavItem> {
            link: '/job-opening/step6',
            label: 'confirm'
        };
    }

    change(technology: Technology, state) {
        this._technologiesService.setState(technology.key, state);
    }

    ngOnInit() {
    }
    getClass(technology: Technology) {
        if (technology.state === STATE_NICE_TO_HAVE) {
            return 'nice_to_have';
        }
        if (technology.state === STATE_MUST_HAVE) {
            return 'must_have';
        }

        return '';
    }

}
