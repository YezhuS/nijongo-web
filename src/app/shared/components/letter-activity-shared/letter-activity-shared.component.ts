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
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CommonModule} from '@angular/common';
import {AnswerQuestionI} from '../../models/answerQuestion.model';
import {ActivityLayout} from '../../models/activity.model';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-letter-activity-shared',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    FormsModule,
    CommonModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './letter-activity-shared.component.html',
  styleUrl: './letter-activity-shared.component.scss',
})
export class LetterActivitySharedComponent implements OnChanges {
  /** La idea es:
   *
   * Desde el padre se envíe las letras o palabras que se van a mostrar como pregunta
   * y su respuesta (o respuestas)
   */

  /**
   *
   *
   * Aumentar el tamaño de la pregunta
   *
   * Mostrar algún mensaje de que se ha terminado el listado o volver a empezar
   */

  protected router = inject(Router);
  private messageService = inject(MessageService);

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
    this.answerQuestionInput = this.shuffle(this.answerQuestionInput);
    this.setValues();

    console.log(this.answerQuestionInput);
    console.log(this.activityLayoutInput);
  }

  // TODO mover a utils
  private shuffle(array: Array<any>): Array<any> {
    return array.sort(() => Math.random() - 0.5);
  }

  // TODO mover a utils
  private removeAccents(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  private showToast(
    severity: 'success' | 'error' | 'warn' | 'info',
    summary: string,
    detail: string,
    life?: 'short' | 'long'
  ) {
    const toastLife = life === 'short' ? 1000 : 5000;
    this.messageService.add({severity, summary, detail, life: toastLife});
  }

  protected validateAnswer(): void {
    // Se comprueba si la respuesta es igual a la pregunta
    // Si son iguales (con lowercase y trim) se pasa a la siguiente
    if (this.activityLayoutInput.justLook) this.nextQuestion();
    else this.checkAnswer() ? this.showCorrect() : this.showMistake();
  }

  private checkAnswer(): boolean {
    const value = this.answers
      .map((x) => this.removeAccents(x.toLocaleLowerCase().trim()))
      .includes(
        this.removeAccents(this.answerValue.toLocaleLowerCase().trim())
      );
    return value;
  }

  private nextQuestion(): void {
    this.questionNumber++;

    // Show end of list
    if (this.questionNumber > this.answerQuestionInput.length - 1) {
      this.showToast('warn', 'Fin de la lista', 'Llegaste al final');
      return;
    }
    this.setValues();
  }

  private showMistake(): void {
    this.showToast('error', 'Respuesta incorrecta', '', 'short');
  }

  private showCorrect(): void {
    this.showToast('success', 'Respuesta correcta', '', 'short');
    this.nextQuestion();
  }

  private setValues(): void {
    this.answerValue = '';
    this.questionValue = this.answerQuestionInput[this.questionNumber].question;
    this.answers = this.answerQuestionInput[this.questionNumber].answer;
  }
}
