import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Зверніть увагу: імпорт з файлу 'app', бо у вас він називається app.ts

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));