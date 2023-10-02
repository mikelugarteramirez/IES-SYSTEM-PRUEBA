import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
    selector: 'shared-modal',
    templateUrl: 'modal-input.component.html',
})

export class ModalInputComponent {
    constructor(
        public dialogRef: MatDialogRef<ModalInputComponent>
    ) {}

    public data = '';

    cancel() {
        this.dialogRef.close();
    }

}