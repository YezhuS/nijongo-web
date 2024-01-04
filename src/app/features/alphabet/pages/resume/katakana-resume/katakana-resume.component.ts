import {Component} from '@angular/core';
import {TabI} from '../../../../../shared/models/tab.model';
import {LetterI} from '../../../../../shared/models/itemLetter.model';
import katakanaBasic from '../../../../../../assets/data/alphabet/katakana.json';
import katakanaD from '../../../../../../assets/data/alphabet/katakana-diacritico.json';
import katakanaDiphthong from '../../../../../../assets/data/alphabet/katakana-diptongo.json';
import {ResumePageSharedComponent} from '../../../../../shared/pages/resume-page-shared/resume-page-shared.component';
import {FULL_ROUTE} from '../../../../../core/const/routes.constant';

@Component({
  selector: 'app-katakana-resume',
  standalone: true,
  imports: [ResumePageSharedComponent],
  templateUrl: './katakana-resume.component.html',
  styleUrl: './katakana-resume.component.scss',
})
export class KatakanaResumeComponent {
  protected previousPath = FULL_ROUTE.katakana_act;
  protected data: TabI<LetterI[]>[];

  constructor() {
    this.data = [
      {
        title: 'Básico',
        content: katakanaBasic,
        itemClass: 'fiveItemsPerRow',
      },
      {
        title: 'Diacrítico',
        content: katakanaD,
        itemClass: 'fiveItemsPerRow',
      },
      {
        title: 'Diptongos',
        content: katakanaDiphthong,
        itemClass: 'threeItemsPerRow',
      },
    ];
  }
}
