import {Component} from '@angular/core';
import {ActivityPageSharedComponent} from '../../../../../shared/pages/activity-page-shared/activity-page-shared.component';
import {ActivityI} from '../../../../../shared/models/activity.model';
import {FULL_ROUTE} from '../../../../../core/const/routes.constant';
import {AlphabetEnum} from '../../../model/alphabet.model';
import {OptionsAlphabetKanji} from '../../../constants/options.constant';

@Component({
  selector: 'app-kanji-activity',
  standalone: true,
  imports: [ActivityPageSharedComponent],
  templateUrl: './kanji-activity.component.html',
  styleUrl: './kanji-activity.component.scss',
})
export class KanjiActivityComponent {
  protected activityOutput: ActivityI = {
    btnR: {
      label: 'Katakana',
      path: FULL_ROUTE.katakana_act,
    },
    btnL: {
      label: 'Hiragana',
      path: FULL_ROUTE.hiragana_act,
    },
    title: 'Kanji',
    resumePath: FULL_ROUTE.kanji_resume,
    type: AlphabetEnum.KANJI,
    options: OptionsAlphabetKanji,
  };
}
