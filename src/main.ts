import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // disbles angular development mode, which turns off assertions and other checks in the framework
  enableProdMode();
}

// used for starting your angular app in the browser, this contains essential code for the web
// app to run in the browser
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
