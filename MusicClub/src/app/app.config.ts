import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appInterceptorProvider } from './app.interceptor';
import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideClientHydration(), provideHttpClient(withFetch()), appInterceptorProvider]
};

