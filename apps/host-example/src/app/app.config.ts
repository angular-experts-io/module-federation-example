import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withRouterConfig,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      // withDebugTracing(),
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      })
    ),
  ],
};
