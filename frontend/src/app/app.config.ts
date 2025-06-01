import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { CpuMonitorComponent } from './cpu-monitor/cpu-monitor.component'; 

export const routes: Routes = [];

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(FormsModule),
    provideRouter(routes)
  ],
  standaloneComponents: [CpuMonitorComponent]
};