import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const PublicGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService)
  const router: Router = new Router();
  const sessionStatus = authService.validateSession;
  if(sessionStatus) {
    router.navigateByUrl('/session');
  }
  return !sessionStatus;
};
