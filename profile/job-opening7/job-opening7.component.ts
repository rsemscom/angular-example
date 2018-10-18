import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavItem} from '../../classes/nav-item';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-job-opening7',
  templateUrl: './job-opening7.component.html',
  styleUrls: ['./job-opening7.component.scss']
})
export class JobOpening7Component implements OnInit {


    public form: FormGroup;
    public moneys = [
        'EUR',
        '$'
    ];
    public money_type = 0;

    constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {
    }

    protected _salary: string;

    get salary(): AbstractControl {
        return this.form.get('salary');
    }

    get leftLink() {
        return <NavItem> {
            link: '/job-opening/step8',
            label: 'skip'
        };
    }
    get rightLink() {
        return <NavItem> {
            link: '/job-opening/step8',
            label: 'confirm'
        };
    }

    onSubmit() {
    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            salary: new FormControl(this._salary, [
                Validators.required,
                Validators.maxLength(50)
            ])
        });
    }

}
