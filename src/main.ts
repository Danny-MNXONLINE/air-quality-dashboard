import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import '@material/web/textfield/outlined-text-field.js';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
