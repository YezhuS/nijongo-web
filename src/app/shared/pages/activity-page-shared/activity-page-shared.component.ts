import {Component, Input, OnChanges, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Activity, ActivityLayout} from '../../models/activity.model';
import {Router} from '@angular/router';
import {SelectButtonModule} from 'primeng/selectbutton';
import {OptionsI} from '../../../core/model/core.model';
import {FormsModule} from '@angular/forms';
import {AlphabetEnum} from '../../../features/alphabet/model/alphabet.model';
import {CommonModule} from '@angular/common';
import {SharedFacadeService} from '../../services/facade/shared-facade.service';
import {SharedStateService} from '../../services/state/shared-state.service';
import {LetterActivitySharedComponent} from '../../components/letter-activity-shared/letter-activity-shared.component';
import {AnswerQuestionI} from '../../models/answerQuestion.model';
import {LetterI} from '../../models/itemLetter.model';
import {ButtonGenericComponent} from '../../../lib/button/button-generic/button-generic.component';

@Component({
  selector: 'app-activity-page-shared',
  standalone: true,
  imports: [
    ButtonModule,
    SelectButtonModule,
    FormsModule,
    CommonModule,
    LetterActivitySharedComponent,
    ButtonGenericComponent,
  ],
  providers: [SharedFacadeService, SharedStateService],
  templateUrl: './activity-page-shared.component.html',
  styleUrl: './activity-page-shared.component.scss',
})
export class ActivityPageSharedComponent implements OnChanges {
  protected router = inject(Router);

  // Activity settings
  @Input() activityInput!: Activity;
  protected startBtnLabel = 'Empezar';
  protected activityStarted = false;
  protected activityLayoutValue = new ActivityLayout();
  protected answerQuestionValue: AnswerQuestionI[] = [];

  // Values
  protected justLook = false;
  protected typeValue = '';
  protected complexityValue: LetterI[] = [];

  // Options
  protected typeOptions: OptionsI[] = [];
  protected complexityOptions: OptionsI[] = [];

  ngOnChanges(): void {
    if (this.activityInput) {
      this.typeOptions = [
        {
          label: this.activityInput.title,
          value: this.activityInput.type,
        },
        {label: 'Romanji', value: AlphabetEnum.ROMANJI},
      ];
      this.typeValue = this.typeOptions[0].value;

      this.complexityOptions = this.activityInput.options;
      this.complexityValue = this.complexityOptions[0].value;
    }
  }

  protected startActivity(): void {
    this.createAnswerQuestionModel();
    // check if any was selected
    if (this.answerQuestionValue.length < 1) {
      console.log('Selecciona algun tipo');
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
    // Build value to send
    this.answerQuestionValue = this.complexityValue.map((value) => {
      const answerQuestionValue: AnswerQuestionI = {
        question:
          this.typeValue === AlphabetEnum.ROMANJI
            ? value.translation
            : value.value,
        answer:
          this.typeValue === AlphabetEnum.ROMANJI
            ? [value.value]
            : [value.translation],
        info: value,
      };
      return answerQuestionValue;
    });
  }
}
