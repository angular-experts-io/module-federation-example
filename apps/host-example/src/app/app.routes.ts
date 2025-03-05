import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'remote-a',
  },

  // DYNAMIC FEDERATION
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

  // STATIC FEDERATION
  // {
  //   path: 'remote-a',
  //   loadChildren: () =>
  //     import('remote-a/Routes').then((m) => m.remoteRoutes),
  // },
  // {
  //   path: 'remote-b',
  //   loadChildren: () =>
  //     import('remote-b/Routes').then((m) => m.remoteRoutes),
  // },
];
