import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ContactsComponent } from './app/contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent }
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

