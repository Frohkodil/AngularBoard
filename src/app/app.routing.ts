import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {PageListComponent} from './page-list/page-list.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', component: PageListComponent},
  { path: 'login', component: LoginComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
