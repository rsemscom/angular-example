import { Component, OnInit } from '@angular/core';
import {NavItem} from '../../classes/nav-item';
import {PositionsService} from '../../services/positions.service';
import {Position} from '../../classes/position';

@Component({
  selector: 'app-job-opening2',
  templateUrl: './job-opening2.component.html',
  styleUrls: ['./job-opening2.component.scss']
})
export class JobOpening2Component implements OnInit {


    constructor(public _positionsService: PositionsService) {

    }

    get positions() {
        return this._positionsService.getAllPositions();
    }
    get picked() {
        return this._positionsService.picked;
    }
    get leftLink() {
        return <NavItem> {
            link: '/job-opening/step3',
            label: 'skip'
        };
    }
    get rightLink() {
        return <NavItem> {
            link: '/job-opening/step3',
            label: 'confirm'
        };
    }
    pick(position: Position) {
        this._positionsService.setPicked(position.key);
    }
    ngOnInit() {}

}
