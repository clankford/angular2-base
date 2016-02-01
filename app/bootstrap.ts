import { bootstrap } from 'angular2/platform/browser';
import { App } from './app';
import { ProjectService } from './services/project.service';

bootstrap(App, [ProjectService]);
