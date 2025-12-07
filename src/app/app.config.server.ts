// src/app/app.config.server.ts
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    // Увімкнути SSR для Angular 20+
    provideServerRendering(),
  ],
};

export const appConfigServer: ApplicationConfig =
  mergeApplicationConfig(appConfig, serverConfig);
