import { Component, OnInit } from '@angular/core';
import {NavItem} from '../../classes/nav-item';
import {Area, STATE_MUST_HAVE, STATE_NICE_TO_HAVE, STATE_UNPICKED} from '../../classes/area';
import {AreasService} from '../../services/areas.service';

@Component({
  selector: 'app-job-opening4',
  templateUrl: './job-opening4.component.html',
  styleUrls: ['./job-opening4.component.scss']
})
export class JobOpening4Component implements OnInit {

    public variants = [];
    public filter = '';


    constructor(public _areasService: AreasService) {
        this.variants[STATE_NICE_TO_HAVE] = 'Nice to have';
        this.variants[STATE_MUST_HAVE] = 'Must have';
        this.variants[STATE_UNPICKED] = 'Don`t need';
    }

    get areas() {
        return this._areasService.getAll();
    }

    get leftLink() {
        return <NavItem> {
            link: '/job-opening/step5',
            label: 'skip'
        };
    }
    get rightLink() {
        return <NavItem> {
            link: '/job-opening/step5',
            label: 'confirm'
        };
    }

    change(area: Area, state) {
        this._areasService.setState(area.key, state);
    }

    ngOnInit() {
    }
    getClass(area: Area) {
        if (area.state === STATE_NICE_TO_HAVE) {
            return 'nice_to_have';
        }
        if (area.state === STATE_MUST_HAVE) {
            return 'must_have';
        }

        return '';
    }


}
