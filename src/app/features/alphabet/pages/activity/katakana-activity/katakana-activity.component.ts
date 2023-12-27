import {Component} from '@angular/core';
import {ActivityPageSharedComponent} from '../../../../../shared/pages/activity-page-shared/activity-page-shared.component';
import {ActivityI} from '../../../../../shared/models/activity.model';
import {FULL_ROUTE} from '../../../../../core/const/routes.constant';
import {AlphabetEnum} from '../../../model/alphabet.model';

@Component({
  selector: 'app-katakana-activity',
  standalone: true,
  imports: [ActivityPageSharedComponent],
  templateUrl: './katakana-activity.component.html',
  styleUrl: './katakana-activity.component.scss',
})
export class KatakanaActivityComponent {
  protected activityOutput: ActivityI = {
    btnR: {
      label: 'Kanji',
      path: FULL_ROUTE.kanji_act,
    },
    btnL: {
      label: 'Hiragana',
      path: FULL_ROUTE.hiragana_act,
    },
    title: 'Katakana',
    resumePath: '',
    type: AlphabetEnum.KATAKANA,
    letterActPath: '',
  };
}
