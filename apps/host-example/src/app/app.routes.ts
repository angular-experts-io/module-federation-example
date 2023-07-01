import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'remote-a',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@angular-experts/host-example/feature/dashboard').then(
        (m) => m.hostExampleFeatureDashboardRoutes
      ),
  },
  {
    path: 'dashboard-with-subroutes',
    loadChildren: () =>
      import(
        '@angular-experts/host-example/feature/dashboard-with-subroutes'
      ).then((m) => m.hostExampleFeatureDashboardWithSubroutesRoutes),
  },
  {
    path: 'remote-a',
    loadChildren: () =>
      loadRemoteModule('remote-a', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'remote-b',
    loadChildren: () =>
      loadRemoteModule('remote-b', './Routes').then((m) => m.remoteRoutes),
  },
];
