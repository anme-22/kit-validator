import { Routes } from '@angular/router';
import { homeRoutes } from './home/home.routes';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/pages/login-page/login-page.component').then(
        (c) => c.LoginPageComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/pages/home-page/home-page.component').then(
        (c) => c.HomePageComponent
      ),
    canActivate: [authGuard],
    children: homeRoutes,
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
