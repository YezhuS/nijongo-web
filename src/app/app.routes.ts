import {Routes} from '@angular/router';
import {PATH} from './core/const/routes.constant';

export const routes: Routes = [
  {
    path: PATH.HOME,
    loadChildren: () =>
      import('./features/home/home.routes').then((m) => m.home_routes),
  },
  {
    path: PATH.ALPHABET,
    loadChildren: () =>
      import('./features/alphabet/alphabet.routes').then(
        (m) => m.alphabet_routes
      ),
  },
  {
    path: PATH.VOCABULARY,
    loadChildren: () =>
      import('./features/vocabulary/vocabulary.routes').then(
        (m) => m.vocabulary_routes
      ),
  },
  {
    path: PATH.PARTICLE,
    loadChildren: () =>
      import('./features/particle/particle.routes').then(
        (m) => m.particle_routes
      ),
  },
  {path: '**', redirectTo: PATH.HOME}, // In case you get a wrong url
  {
    path: '',
    redirectTo: PATH.HOME,
    pathMatch: 'full',
  },
];
