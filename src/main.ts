import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { LoginComponent } from './app/login/login.component';
import { appRoutes } from './app/app.routes'; // Or `routes` depending on your export

bootstrapApplication(LoginComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideAnimations()
  ]
}).catch(err => console.error(err));
