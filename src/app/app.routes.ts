import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/pages/login-page/login-page.component').then(c => c.LoginPageComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/pages/home-page/home-page.component').then(c => c.HomePageComponent)
  },
  {
    path: 'kit-detail',
    loadComponent: () => import('./kit-Detail/pages/kit-detail/kit-detail.component').then(c => c.KitDetailComponent)
  },

  { path: '', 
    redirectTo: 'auth', 
    pathMatch: 'full' },
];
