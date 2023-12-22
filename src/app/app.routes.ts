import {Routes} from '@angular/router';
import {PATH} from './core/const/routes.constant';

export const routes: Routes = [
  {
    path: PATH.HOME,
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {path: '**', redirectTo: PATH.HOME}, // In case you get a wrong url
  {
    path: '',
    redirectTo: PATH.HOME,
    pathMatch: 'full',
  },
];
