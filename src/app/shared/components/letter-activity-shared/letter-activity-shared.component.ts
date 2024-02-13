import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  inject,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AnswerQuestionI} from '../../models/answerQuestion.model';
import {ActivityLayout} from '../../models/activity.model';
import {MessageFacadeService} from '../../../core/service/facade/message-facade.service';
import {MessageStateService} from '../../../core/service/state/message-state.service';
import {shuffle} from '../../../core/utils/lists.utils';
import {removeAccents} from '../../../core/utils/strings.utils';
import {ButtonGenericComponent} from '../../../lib/button/button-generic/button-generic.component';

@Component({
  selector: 'app-letter-activity-shared',
  standalone: true,
  imports: [FormsModule, CommonModule, ButtonGenericComponent],
  providers: [MessageStateService, MessageFacadeService],
  templateUrl: './letter-activity-shared.component.html',
  styleUrl: './letter-activity-shared.component.scss',
})
export class LetterActivitySharedComponent implements OnChanges {
  protected router = inject(Router);
  private messageFacadeService = inject(MessageFacadeService);

  @Input() answerQuestionInput: AnswerQuestionI[] = [];
  @Input() activityLayoutInput = new ActivityLayout();
  @Output() closeActivityEvent = new EventEmitter<void>(); // TODO cambiar por una modal de confirmación

  // Labels
  protected questionValue = 'Pregunta';
  protected answerValue = '';
  protected nextBtnLabel = 'Validar';
  protected answerHelpText = 'Introduce tu respuesta';

  // Activity
  private answers: string[] = [];
  private questionNumber = 0;

  ngOnChanges(): void {
    this.answerQuestionInput = shuffle(this.answerQuestionInput);
    this.setValues();

    console.log(this.answerQuestionInput);
    console.log(this.activityLayoutInput);
  }

  protected validateAnswer(): void {
    if (this.activityLayoutInput.justLook) this.nextQuestion();
    else this.checkAnswer() ? this.showCorrect() : this.showMistake();
  }

  private checkAnswer(): boolean {
    const value = this.answers
      .map((x) => removeAccents(x.toLocaleLowerCase().trim()))
      .includes(removeAccents(this.answerValue.toLocaleLowerCase().trim()));
    return value;
  }

  private nextQuestion(): void {
    this.questionNumber++;

    // Show end of list
    if (this.questionNumber > this.answerQuestionInput.length - 1) {
      this.openSnackBar('Llegaste al final de la lista');
      return;
    }
    this.setValues();
  }

  private showMistake(): void {
    this.openSnackBar('Respuesta incorrecta');
  }

  private showCorrect(): void {
    this.openSnackBar('Respuesta correcta');
    this.nextQuestion();
  }

  private setValues(): void {
    this.answerValue = '';
    this.questionValue = this.answerQuestionInput[this.questionNumber].question;
    this.answers = this.answerQuestionInput[this.questionNumber].answer;
  }

  private openSnackBar(message: string, action?: string, duration?: number) {
    this.messageFacadeService.showSnackbar({message, action, duration});
  }
}
