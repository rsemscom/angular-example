import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavItem} from '../../classes/nav-item';

@Component({
  selector: 'app-job-opening8',
  templateUrl: './job-opening8.component.html',
  styleUrls: ['./job-opening8.component.scss']
})
export class JobOpening8Component implements OnInit {

    public form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    protected _link: string;

    get link(): AbstractControl {
        return this.form.get('link');
    }

    get leftLink() {
        return null;
    }
    get rightLink() {
        return <NavItem> {
            link: '/job-board',
            label: 'ready'
        };
    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            link: new FormControl(this._link, [
                Validators.maxLength(150)
            ]),
        });
    }

}
