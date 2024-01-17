import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './error/not-found/not-found.component';


export const appRoutes: Routes = [
  { path: '', children: [
    { path: '', redirectTo: 'main', pathMatch: 'full'},
    { path: 'main', loadChildren: () => import('./main/main.routes').then(m => m.mainRoutes)},
    { path: 'login', component: LoginComponent },
    { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)},
  ]},
  { path: '**', component: NotFoundComponent }

];
