import {platformBrowser} from '@angular/platform-browser';
import {AppModuleNgFactory} from './app/app.module.ngfactory';

//"./app/app.module.ngfactory
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
