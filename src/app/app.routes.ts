import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from  './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';

const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
  ];
  
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
  