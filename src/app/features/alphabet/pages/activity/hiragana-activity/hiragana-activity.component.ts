import {Component} from '@angular/core';
import {ActivityPageSharedComponent} from '../../../../../shared/pages/activity-page-shared/activity-page-shared.component';
import {ActivityI} from '../../../../../shared/models/activity.model';
import {FULL_ROUTE, PATH} from '../../../../../core/const/routes.constant';
import {AlphabetEnum} from '../../../model/alphabet.model';
import {OptionsAlphabetHiragana} from '../../../constants/options.constant';

@Component({
  selector: 'app-hiragana-activity',
  standalone: true,
  imports: [ActivityPageSharedComponent],
  templateUrl: './hiragana-activity.component.html',
  styleUrl: './hiragana-activity.component.scss',
})
export class HiraganaActivityComponent {
  protected activityOutput: ActivityI = {
    btnR: {
      label: 'Kanji',
      path: FULL_ROUTE.kanji_act,
    },
    btnL: {
      label: 'Katakana',
      path: FULL_ROUTE.katakana_act,
    },
    title: 'Hiragana',
    resumePath: FULL_ROUTE.hiragana_resume,
    type: AlphabetEnum.HIRAGANA,
    options: OptionsAlphabetHiragana,
  };
}
