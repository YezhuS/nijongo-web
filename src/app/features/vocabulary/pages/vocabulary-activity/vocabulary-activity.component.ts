import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LetterActivitySharedComponent} from '../../../../shared/components/letter-activity-shared/letter-activity-shared.component';
import {OptionsI} from '../../../../core/model/core.model';
import {Router} from '@angular/router';
import {FULL_ROUTE} from '../../../../core/const/routes.constant';
import {
  OptionsVocabularyActivityTranslation,
  OptionsVocabularyActivityType,
  OptionsVocabularyType,
} from '../../constants/options.constant';
import {ActivityLayout} from '../../../../shared/models/activity.model';
import {AnswerQuestionI} from '../../../../shared/models/answerQuestion.model';
import {WordI, WordTypeEnum} from '../../model/word.model';
import {TranslationFlow} from '../../model/translation.model';
import {MessageStateService} from '../../../../core/service/state/message-state.service';
import {MessageFacadeService} from '../../../../core/service/facade/message-facade.service';
import {ButtonGenericComponent} from '../../../../lib/button/button-generic/button-generic.component';
import {ButtonSelectComponent} from '../../../../lib/button/button-select/button-select.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CheckboxGenericComponent} from '../../../../lib/checkbox/checkbox-generic/checkbox-generic.component';

@Component({
  selector: 'app-vocabulary-activity',
  standalone: true,
  imports: [
    CommonModule,
    LetterActivitySharedComponent,
    ButtonGenericComponent,
    ButtonSelectComponent,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    CheckboxGenericComponent,
  ],
  providers: [MessageStateService, MessageFacadeService],
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
  protected typeValues = new FormControl<OptionsI[]>([]);

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
      this.openSnackBar('Debes seleccionar algún tipo');
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
    const answerQuestionsList = this.typeValues.value!.map((option) => {
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

  protected toggleAllSelection(value: boolean) {
    if (value) this.typeValues.setValue(this.typeOptions);
    else this.typeValues.setValue([]);
  }

  private openSnackBar(message: string, action?: string, duration?: number) {
    this.messageFacadeService.showSnackbar({message, action, duration});
  }
}
