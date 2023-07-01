import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@angular-experts/remote-b/feature/b').then(
        (m) => m.remoteBFeatureBRoutes
      ),
  },
];
