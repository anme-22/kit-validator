import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieManagementService } from '../auth/services/cookie-management.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieManagementService);
  const token = cookieService.getCookie('token'); // Obtiene el token de la cookie

  const modifiedReq = req.clone({
    setHeaders: { token: token },
  });

  return next(modifiedReq);
};
