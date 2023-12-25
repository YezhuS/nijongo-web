import {Routes} from '@angular/router';
import {VocabularyComponent} from './vocabulary.component';

export const vocabulary_routes: Routes = [
  {
    path: '',
    component: VocabularyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
];
