import {Component, EventEmitter, Input, Output, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ActivityLetter} from '../../models/activity.model';

@Component({
  selector: 'app-letter-activity-shared',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule],
  templateUrl: './letter-activity-shared.component.html',
  styleUrl: './letter-activity-shared.component.scss',
})
export class LetterActivitySharedComponent {
  protected router = inject(Router);

  @Input() activityLetterInput: ActivityLetter = new ActivityLetter();
  @Output() closeActivityEvent = new EventEmitter<void>(); // TODO cambiar por una modal de confirmación

  // Labels
  protected answerValue = '';
  protected nextBtnLabel = 'Validar';
  protected answerHelpText = 'Introduce tu respuesta';

  protected nextLetter(): void {}
}
