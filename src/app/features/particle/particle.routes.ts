import {Routes} from '@angular/router';
import {ParticleComponent} from './particle.component';

export const particle_routes: Routes = [
  {
    path: '',
    component: ParticleComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
];
