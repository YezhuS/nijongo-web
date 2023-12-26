import {Routes} from '@angular/router';
import {AlphabetComponent} from './alphabet.component';
import {AlphabetHomeComponent} from './pages/alphabet-home/alphabet-home.component';
import {KanjiActivityComponent} from './pages/activity/kanji-activity/kanji-activity.component';
import {HiraganaActivityComponent} from './pages/activity/hiragana-activity/hiragana-activity.component';
import {KatakanaActivityComponent} from './pages/activity/katakana-activity/katakana-activity.component';
import {PATH} from '../../core/const/routes.constant';

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
      {
        path: '',
        component: AlphabetHomeComponent,
      },
      {
        path: PATH.KANJI,
        component: KanjiActivityComponent,
      },
      {
        path: PATH.HIRAGANA,
        component: HiraganaActivityComponent,
      },
      {
        path: PATH.KATAKANA,
        component: KatakanaActivityComponent,
      },
    ],
  },
];
