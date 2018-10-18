import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {NavItem} from '../../classes/nav-item';

@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.scss']
})
export class JobOpeningComponent implements OnInit {

    public form: FormGroup;

    constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {
    }


    protected _position: string;

    get position(): AbstractControl {
        return this.form.get('position');
    }

    protected _title: string;

    get title(): AbstractControl {
        return this.form.get('title');
    }

    protected _requirements: string;

    get requirements(): AbstractControl {
        return this.form.get('requirements');
    }

    protected _desc: string;

    get desc(): AbstractControl {
        return this.form.get('desc');
    }


    get leftLink() {
        return <NavItem> {
            link: '/job-opening/step2',
            label: 'skip'
        };
    }
    get rightLink() {
        return <NavItem> {
            link: '/job-opening/step2',
            label: 'confirm'
        };
    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            position: new FormControl(this._position, [
                Validators.required,
                Validators.maxLength(50)
            ]),
            title: new FormControl(this._title, [
                Validators.required,
                Validators.maxLength(50),
            ]),
            requirements: new FormControl(this._requirements, [
                Validators.maxLength(220),
            ]),

            desc: new FormControl(this._desc, [
                Validators.required,
                Validators.maxLength(220),
            ])

        });
    }

}
