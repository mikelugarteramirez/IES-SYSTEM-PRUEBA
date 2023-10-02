import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataContentModal } from 'src/app/models/modal.interfaces';
@Component({
    selector: 'shared-modal',
    templateUrl: 'modal-info.component.html',
})

export class ModalInfoComponent {
    constructor(
        public dialogRef: MatDialogRef<ModalInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DataContentModal
    ) {
        this.status = data.status;
        this.message = data.message;
        this.title = data.title;
        this.buttonSubmitText = data.buttonSubmitText;
        this.buttonCancelText = data.buttonCancelText;
    }

    status!: 'error'|'success'|'question';
    message!: string;
    title!: string;
    buttonSubmitText: string|undefined;
    buttonCancelText: string|undefined;

    cancel() {
        this.dialogRef.close(false);
    }

    sumbit() {
        this.dialogRef.close(true);
    }

}