import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CookieManagementService } from '../services/cookie-management.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const cookieService = inject(CookieManagementService);
  const router = inject(Router);
  const token = cookieService.getCookie('token');

  if (token && !authService.isTokenExpired(token)) {
    return true;
  } else {
    if (token) {
      cookieService.deleteCookie('token');
    }
    router.navigate(['/auth']);
    return false;
  }
};
