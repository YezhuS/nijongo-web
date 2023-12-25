import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {HomeMainComponent} from './pages/home-main/home-main.component';

export const home_routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
      {
        path: '',
        component: HomeMainComponent,
      },
    ],
  },
];
