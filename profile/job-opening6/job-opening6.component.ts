import { Component, OnInit } from '@angular/core';
import {NavItem} from '../../classes/nav-item';
import {Position} from '../../classes/position';
import {IndustriesService} from '../../services/industries.service';

@Component({
  selector: 'app-job-opening6',
  templateUrl: './job-opening6.component.html',
  styleUrls: ['./job-opening6.component.scss']
})
export class JobOpening6Component implements OnInit {


    constructor(public _industriesService: IndustriesService) {
    }

    get industries() {
        return this._industriesService.getAll();
    }
    get leftLink() {
        return <NavItem> {
            link: '/job-opening/step7',
            label: 'skip'
        };
    }
    get rightLink() {
        return <NavItem> {
            link: '/job-opening/step7',
            label: 'confirm'
        };
    }
    pick(position: Position) {
        this._industriesService.setPicked(position.key);
    }
    ngOnInit() {}
}
