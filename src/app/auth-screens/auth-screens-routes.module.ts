import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthWelcomePageComponent } from './screens/welcome-page/welcome-page.component';
import { AuthConversionesComponent } from './screens/conversiones/conversiones.component';
import { AuthCalculadoraFechaComponent } from './screens/calculadora-fecha/calculadora-fecha.component';
import { AuthFormularioComponent } from './screens/formulario/formulario.component';

export const routes: Routes = [
    { path: 'inicio', component: AuthWelcomePageComponent},
    { path: 'conversiones', component: AuthConversionesComponent},
    { path: 'calculadora-fechas', component: AuthCalculadoraFechaComponent},
    { path: 'formulario', component: AuthFormularioComponent},
    { path: '**', redirectTo: 'inicio' }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthScreensRoutingModule { }
