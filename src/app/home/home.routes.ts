import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'kit-detail',
    loadComponent: () =>
      import('../kit-Detail/pages/kit-detail/kit-detail.component').then(
        (c) => c.KitDetailComponent
      ),
  },
  {
    path: 'scan',
    loadComponent: () =>
      import('../home/pages/scan-page/scan-page.component').then(
        (c) => c.ScanPageComponent
      ),
  },
  {
    path: 'kits-delivered',
    loadComponent: () =>
      import('../kits/pages/kits-delivered/kits-delivered.component').then(
        (c) => c.KitsDeliveredComponent
      ),
  },
  {
    path: '',
    redirectTo: 'scan',
    pathMatch: 'full',
  },
];
