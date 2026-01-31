import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClient),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
