import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthScreensRoutingModule } from './auth-screens-routes.module';
import { AuthWelcomePageComponent } from './screens/welcome-page/welcome-page.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { PipesModule } from '../pipes/pipes.module';
import { AuthConversionesComponent } from './screens/conversiones/conversiones.component';
import { AuthCalculadoraFechaComponent } from './screens/calculadora-fecha/calculadora-fecha.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormularioComponent } from './screens/formulario/formulario.component';

@NgModule({
    imports: [
        AuthScreensRoutingModule,
        SharedComponentsModule,
        CommonModule,
        PipesModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatRadioModule
    ],
    declarations: [
        AuthWelcomePageComponent,
        AuthConversionesComponent,
        AuthCalculadoraFechaComponent,
        AuthFormularioComponent
    ],
    exports: [],
})
export class AuthScreensModuleModule { }
