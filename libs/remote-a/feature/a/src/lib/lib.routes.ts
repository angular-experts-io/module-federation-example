import { Route } from '@angular/router';

import { RemoteAFeatureAComponent } from './remote-a-feature-a/remote-a-feature-a.component';
import { RemoteAFeatureASiblingComponent } from './remote-a-feature-a-sibling/remote-a-feature-a-sibling.component';
import { RemoteAFeatureAChildComponent } from './remote-a-feature-a-child/remote-a-feature-a-child.component';

export const remoteAFeatureARoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'root',
  },
  {
    path: 'root',
    component: RemoteAFeatureAComponent,
    children: [
      {
        path: 'child',
        component: RemoteAFeatureAChildComponent,
      },
    ],
  },
  {
    path: 'sibling',
    component: RemoteAFeatureASiblingComponent,
  },
];
