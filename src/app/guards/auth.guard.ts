import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ) => {
        const authService: AuthService = inject(AuthService)
        const router: Router = new Router();
        const sessionStatus = authService.validateSession;
        if(!sessionStatus) {
            router.navigateByUrl('/');
        }
        return sessionStatus;
}

