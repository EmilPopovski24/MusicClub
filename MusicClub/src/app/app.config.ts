import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppInterceptor, appInterceptorProvider } from './app.interceptor';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withInterceptors([{
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS}
  ]))]
};



// ,provideClientHydration