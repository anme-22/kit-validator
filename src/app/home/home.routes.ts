import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: 'settings',
    loadComponent: () =>
      import('../settings/pages/setting-page/setting-page.component').then(
        (c) => c.SettingPageComponent
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
