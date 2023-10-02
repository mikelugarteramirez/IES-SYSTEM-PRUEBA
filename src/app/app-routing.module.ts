import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './screens/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PublicGuard } from './guards/public.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent
    , canActivate: [PublicGuard] 
},
    {   path: 'session', 
        loadChildren: () => import('./auth-screens/auth-screens.module').then(m => m.AuthScreensModuleModule),
        canActivate: [AuthGuard] 
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule { }
