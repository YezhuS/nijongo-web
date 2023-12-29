import {Routes} from '@angular/router';
import {VocabularyComponent} from './vocabulary.component';
import {VocabularyActivityComponent} from './pages/vocabulary-activity/vocabulary-activity.component';
import {PATH} from '../../core/const/routes.constant';
import {VocabularyResumeComponent} from './pages/vocabulary-resume/vocabulary-resume.component';

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
      {
        path: '',
        component: VocabularyActivityComponent,
      },
      {
        path: PATH.RESUME,
        component: VocabularyResumeComponent,
      },
    ],
  },
];
