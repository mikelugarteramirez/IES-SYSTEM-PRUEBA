import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalInputComponent } from './components/modal-input/modal-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';




@NgModule({
    imports: [
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        RouterModule,
        CommonModule
    ],
    declarations: [ModalInputComponent, ModalInfoComponent, NavBarComponent, LoadingComponent],
    exports: [ModalInputComponent, ModalInfoComponent, NavBarComponent,LoadingComponent],
    providers: [],
})
export class SharedComponentsModule { }
