import {Routes} from '@angular/router';
import {AlphabetComponent} from './alphabet.component';

export const alphabet_routes: Routes = [
  {
    path: '',
    component: AlphabetComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
];
