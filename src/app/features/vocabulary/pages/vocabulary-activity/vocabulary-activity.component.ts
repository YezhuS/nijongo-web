import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import {LetterActivitySharedComponent} from '../../../../shared/components/letter-activity-shared/letter-activity-shared.component';
import {OptionsI} from '../../../../core/model/core.model';
import {Router} from '@angular/router';
import {FULL_ROUTE} from '../../../../core/const/routes.constant';
import {
  OptionsVocabularyActivityTranslation,
  OptionsVocabularyActivityType,
  OptionsVocabularyType,
} from '../../constants/options.constant';
import {MultiSelectModule} from 'primeng/multiselect';
import {ActivityLayout} from '../../../../shared/models/activity.model';
import {AnswerQuestionI} from '../../../../shared/models/answerQuestion.model';
import {WordI, WordTypeEnum} from '../../model/word.model';
import {TranslationFlow} from '../../model/translation.model';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {MessageStateService} from '../../../../core/service/state/message-state.service';
import {MessageFacadeService} from '../../../../core/service/facade/message-facade.service';
import {SeverityMessageEnum} from '../../../../core/enum/message.enum';
import {ButtonGenericComponent} from '../../../../lib/button/button-generic/button-generic.component';
import {ButtonSelectComponent} from '../../../../lib/button/button-select/button-select.component';

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
    ToastModule,
    ButtonGenericComponent,
    ButtonSelectComponent,
  ],
  providers: [MessageService, MessageStateService, MessageFacadeService],
  templateUrl: './vocabulary-activity.component.html',
  styleUrl: './vocabulary-activity.component.scss',
})
export class VocabularyActivityComponent {
  protected router = inject(Router);
  private messageFacadeService = inject(MessageFacadeService);

  protected startBtnLabel = 'Empezar';
  protected activityStarted = false;
  protected activityLayoutValue = new ActivityLayout();
  protected answerQuestionValue: AnswerQuestionI[] = [];
  protected resumePath = FULL_ROUTE.vocab_resume;
  protected title = 'Vocabulary';

  // Values
  protected justLook = false;
  protected firstConditionValue = WordTypeEnum.Kana;
  protected secondConditionValue = TranslationFlow.JP_ES;
  protected typeValues: OptionsI[] = [];

  // Options
  protected firstConditionOptions: OptionsI[] = [];
  protected secondConditionOptions: OptionsI[] = [];
  protected typeOptions: OptionsI[] = [];

  constructor() {
    this.typeOptions = OptionsVocabularyType;
    this.firstConditionOptions = OptionsVocabularyActivityType;
    this.secondConditionOptions = OptionsVocabularyActivityTranslation;
    this.firstConditionValue = this.firstConditionOptions[0].value;
    this.secondConditionValue = this.secondConditionOptions[0].value;
  }

  protected startActivity(): void {
    this.createAnswerQuestionModel();
    // check if any was selected
    if (this.answerQuestionValue.length < 1) {
      this.messageFacadeService.showToast({
        severity: SeverityMessageEnum.warn,
        summary: 'Cuidado',
        detail: 'Debes seleccionar algún tipo',
      });
      return;
    }
    // Create object to send
    let valueToSend = new ActivityLayout();
    valueToSend = {
      ...valueToSend,
      justLook: this.justLook,
    };
    // Send object
    this.activityLayoutValue = valueToSend;
    // Start letter activity
    this.activityStarted = true;
  }

  private createAnswerQuestionModel(): void {
    // Check if null
    if (this.typeValues === null) return;
    // Build value to send
    const answerQuestionsList = this.typeValues.map((option) => {
      const valuesOption: WordI[] = option.value;
      return valuesOption.map((value) => {
        const answerQuestionValue: AnswerQuestionI = {
          question:
            this.secondConditionValue === TranslationFlow.JP_ES
              ? this.chooseJPTranslation(value)
              : this.chooseESTranslation(value)[0],
          answer:
            this.secondConditionValue === TranslationFlow.JP_ES
              ? this.chooseESTranslation(value)
              : [this.chooseJPTranslation(value)],
          info: value,
        };
        return answerQuestionValue;
      });
    });
    this.answerQuestionValue = answerQuestionsList.flat();
  }

  private chooseJPTranslation(word: WordI): string {
    switch (this.firstConditionValue) {
      case WordTypeEnum.Kana: {
        return word.kana;
      }
      case WordTypeEnum.Kanji: {
        return word.kanji;
      }
      case WordTypeEnum.Romaji: {
        return word.romaji;
      }
    }
  }

  private chooseESTranslation(word: WordI): string[] {
    const value: string[] = [];
    if (word.more_info && word.more_info.other_translations)
      value.push(word.translation, ...word.more_info.other_translations);
    else value.push(word.translation);

    return value;
  }
}
