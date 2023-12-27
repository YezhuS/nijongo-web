import {Component, Input, OnChanges, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Activity, ActivityLetter} from '../../models/activity.model';
import {Router} from '@angular/router';
import {SelectButtonModule} from 'primeng/selectbutton';
import {OptionsI} from '../../../core/model/core.model';
import {FormsModule} from '@angular/forms';
import {
  AlphabetEnum,
  ComplexityAlphabetEnum,
} from '../../../features/alphabet/model/alphabet.model';
import {CommonModule} from '@angular/common';
import {SharedFacadeService} from '../../services/facade/shared-facade.service';
import {SharedStateService} from '../../services/state/shared-state.service';
import {LetterActivitySharedComponent} from '../../components/letter-activity-shared/letter-activity-shared.component';

@Component({
  selector: 'app-activity-page-shared',
  standalone: true,
  imports: [
    ButtonModule,
    SelectButtonModule,
    FormsModule,
    CommonModule,
    LetterActivitySharedComponent,
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
  protected activityLetterValue = new ActivityLetter();

  // Values
  protected justLook = false;
  protected typeValue = '';
  protected complexityValue = '';

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

      this.complexityOptions = [
        {
          label: 'Básico',
          value: ComplexityAlphabetEnum.BASIC,
        },
        {
          label: 'Complejo',
          value: ComplexityAlphabetEnum.COMPLEX,
        },
        {
          label: 'Todo',
          value: ComplexityAlphabetEnum.ALL,
        },
      ];
      this.complexityValue = this.complexityOptions[0].value;
    }
  }

  protected startActivity(): void {
    // Create object to send
    const valueToSend: ActivityLetter = {
      justLook: this.justLook,
      complexity: this.complexityValue,
      type: this.typeValue,
    };
    // Send object
    this.activityLetterValue = valueToSend;
    // Start letter activity
    this.activityStarted = true;
  }
}
