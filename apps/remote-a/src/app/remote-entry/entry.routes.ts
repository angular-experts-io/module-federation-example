import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@angular-experts/remote-a/feature/a').then(
        (m) => m.remoteAFeatureARoutes
      ),
  },
];
