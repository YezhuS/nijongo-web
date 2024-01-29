import {Component} from '@angular/core';
import {ResumePageSharedComponent} from '../../../../../shared/pages/resume-page-shared/resume-page-shared.component';
import {TabI} from '../../../../../lib/model/tab.model';
import {LetterI} from '../../../../../shared/models/itemLetter.model';
import {FULL_ROUTE} from '../../../../../core/const/routes.constant';

@Component({
  selector: 'app-kanji-resume',
  standalone: true,
  imports: [ResumePageSharedComponent],
  templateUrl: './kanji-resume.component.html',
  styleUrl: './kanji-resume.component.scss',
})
export class KanjiResumeComponent {
  protected previousPath = FULL_ROUTE.kanji_act;
  protected data: TabI<LetterI[]>[];

  constructor() {
    this.data = [
      {
        title: '',
        content: [],
      },
    ];
  }
}
