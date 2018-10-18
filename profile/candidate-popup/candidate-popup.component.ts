import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface DialogData {
    someData: string;
}


@Component({
  selector: 'app-candidate-popup',
  templateUrl: './candidate-popup.component.html',
  styleUrls: ['./candidate-popup.component.scss']
})
export class CandidatePopupComponent {
    public candidate = 'Choose candidate';

    get candidates() {
        return [
            {viewValue: 'John BlueBerry', value: 'blue'},
            {viewValue: 'David RedBerry', value: 'red'},
            {viewValue: 'John GreyBerry', value: 'grey'},
            {viewValue: 'Terk BlackBerry', value: 'black'},
            {viewValue: 'Ron OrangeBerry', value: 'apple'},
            {viewValue: 'Garry WisdomBerry', value: 'pencil'}
        ];
    }

    setCandidate(name) {
        this.candidate = name;
    }

    constructor(
        public dialogRef: MatDialogRef<CandidatePopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }


    closeDialog() {
        this.dialogRef.close();
    }

}
