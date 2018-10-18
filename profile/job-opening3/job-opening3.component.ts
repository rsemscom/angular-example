import { Component, OnInit } from '@angular/core';
import {ExpertisesService, MAX_EXPERTISE_COUNT} from '../../services/expertises.service';
import {NavItem} from '../../classes/nav-item';
import {Position} from '../../classes/position';

@Component({
  selector: 'app-job-opening3',
  templateUrl: './job-opening3.component.html',
  styleUrls: ['./job-opening3.component.scss']
})
export class JobOpening3Component implements OnInit {


    constructor(public _expertisesService: ExpertisesService) {
    }

    get expertises() {
        return this._expertisesService.getAll();
    }
    get header() {
        return `Choose up to ${MAX_EXPERTISE_COUNT} expertises`;
    }
    get leftLink() {
        return <NavItem> {
            link: '/job-opening/step4',
            label: 'skip'
        };
    }
    get rightLink() {
        return <NavItem> {
            link: '/job-opening/step4',
            label: 'confirm'
        };
    }
    pick(position: Position) {
        this._expertisesService.setPicked(position.key);
    }
    ngOnInit() {}

}
