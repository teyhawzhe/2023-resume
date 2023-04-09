import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '',
    loadComponent:()=>import('./app/view/main-page/main-page.component').then(c=>c.MainPageComponent)
  }
];

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes), BrowserAnimationsModule, BrowserAnimationsModule, BrowserAnimationsModule, BrowserAnimationsModule)]
});