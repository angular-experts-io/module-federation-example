import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

import { HostExampleFeatureDashboardWithSubroutesComponent } from './host-example-feature-dashboard-with-subroutes/host-example-feature-dashboard-with-subroutes.component';

export const hostExampleFeatureDashboardWithSubroutesRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    // MUST HAVE A PATH!
    path: 'dashboard',
    component: HostExampleFeatureDashboardWithSubroutesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'remote-a',
        outlet: 'left',
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'remote-b',
        outlet: 'right',
      },
      {
        path: 'remote-a',
        outlet: 'left',
        loadChildren: () =>
          loadRemoteModule('remote-a', './Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'remote-a',
        outlet: 'right',
        loadChildren: () =>
          loadRemoteModule('remote-a', './Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'remote-b',
        outlet: 'left',
        loadChildren: () =>
          loadRemoteModule('remote-b', './Routes').then((m) => m.remoteRoutes),
      },
      {
        path: 'remote-b',
        outlet: 'right',
        loadChildren: () =>
          loadRemoteModule('remote-b', './Routes').then((m) => m.remoteRoutes),
      },
    ],
  },
];
