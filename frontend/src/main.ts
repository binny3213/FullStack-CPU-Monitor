import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CpuMonitorComponent } from './app/cpu-monitor/cpu-monitor.component';

bootstrapApplication(CpuMonitorComponent, appConfig)
  .catch((err) => console.error(err));
