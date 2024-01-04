import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import {LetterActivitySharedComponent} from '../../../../shared/components/letter-activity-shared/letter-activity-shared.component';
import {OptionsI} from '../../../../core/model/core.model';
import {ActivityLetter} from '../../../../shared/models/activity.model';
import {Router} from '@angular/router';
import {FULL_ROUTE} from '../../../../core/const/routes.constant';
import {VocabularyEnum} from '../../model/vocabulary.model';
import {
  OptionsVocabularyActivity,
  OptionsVocabularyType,
} from '../../constants/options.constant';
import {MultiSelectModule} from 'primeng/multiselect';

@Component({
  selector: 'app-vocabulary-activity',
  standalone: true,
  imports: [
    ButtonModule,
    SelectButtonModule,
    FormsModule,
    CommonModule,
    LetterActivitySharedComponent,
    MultiSelectModule,
  ],
  templateUrl: './vocabulary-activity.component.html',
  styleUrl: './vocabulary-activity.component.scss',
})
export class VocabularyActivityComponent {
  protected router = inject(Router);

  protected startBtnLabel = 'Empezar';
  protected activityStarted = false;
  protected activityLetterValue = new ActivityLetter();
  protected resumePath = FULL_ROUTE.vocab_resume;
  protected title = 'Vocabulary';

  // Values
  protected justLook = false;
  protected questionValue = '';
  protected answerValue = '';
  protected typeValues: string[] = [];

  // Options
  protected questionOptions: OptionsI[] = [];
  protected answerOptions: OptionsI[] = [];
  protected typeOptions: OptionsI[] = [];

  constructor() {
    this.typeOptions = OptionsVocabularyType;
    this.questionOptions = OptionsVocabularyActivity;
    this.answerOptions = OptionsVocabularyActivity;
    this.questionValue = this.questionOptions[0].value;
    this.answerValue = this.answerOptions[2].value;
    this.answerOptions[0].disable = true;
  }

  protected questionOptionChange(value: number): void {
    const options: OptionsI[] = [
      {label: 'Katakana/Hiragana', value: VocabularyEnum.KA_HI},
      {label: 'Kanji', value: VocabularyEnum.KANJI},
      {label: 'Romanji', value: VocabularyEnum.ROMANJI},
    ];
    options[value].disable = true;
    this.answerOptions = options;
    if (this.answerValue === this.answerOptions[value].value)
      this.answerValue = '';
  }

  protected startActivity(): void {
    // TODO con shared o con un component propio
    // Create object to send
    const valueToSend: ActivityLetter = {
      justLook: this.justLook,
      complexity: this.questionValue,
      type: this.answerValue,
    };
    // Send object
    this.activityLetterValue = valueToSend;
    // Start letter activity
    this.activityStarted = true;
  }
}
