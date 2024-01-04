import {Component} from '@angular/core';
import {ResumePageSharedComponent} from '../../../../../shared/pages/resume-page-shared/resume-page-shared.component';
import {TabI} from '../../../../../shared/models/tab.model';
import {LetterI} from '../../../../../shared/models/itemLetter.model';
import hiraganaBasic from '../../../../../../assets/data/alphabet/hiragana.json';
import hiraganaD from '../../../../../../assets/data/alphabet/hiragana-diacritico.json';
import hiraganaDiphthong from '../../../../../../assets/data/alphabet/hiragana-diptongo.json';
import {FULL_ROUTE} from '../../../../../core/const/routes.constant';

@Component({
  selector: 'app-hiragana-resume',
  standalone: true,
  imports: [ResumePageSharedComponent],
  templateUrl: './hiragana-resume.component.html',
  styleUrl: './hiragana-resume.component.scss',
})
export class HiraganaResumeComponent {
  protected previousPath = FULL_ROUTE.hiragana_act;
  protected data: TabI<LetterI[]>[];

  constructor() {
    this.data = [
      {
        title: 'Básico',
        content: hiraganaBasic,
        itemClass: 'fiveItemsPerRow',
      },
      {
        title: 'Diacrítico',
        content: hiraganaD,
        itemClass: 'fiveItemsPerRow',
      },
      {
        title: 'Diptongos',
        content: hiraganaDiphthong,
        itemClass: 'threeItemsPerRow',
      },
    ];
  }
}
