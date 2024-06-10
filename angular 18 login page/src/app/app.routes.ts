import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login';
import { RegisterComponent } from './auth/register';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
