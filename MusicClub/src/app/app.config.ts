import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { appInterceptorProvider } from './app.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), [appInterceptorProvider]]
};



// ,provideClientHydration