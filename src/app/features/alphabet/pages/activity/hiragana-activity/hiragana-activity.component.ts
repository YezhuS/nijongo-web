import {Component} from '@angular/core';
import {ActivityPageSharedComponent} from '../../../../../shared/pages/activity-page-shared/activity-page-shared.component';

@Component({
  selector: 'app-hiragana-activity',
  standalone: true,
  imports: [ActivityPageSharedComponent],
  templateUrl: './hiragana-activity.component.html',
  styleUrl: './hiragana-activity.component.scss',
})
export class HiraganaActivityComponent {}
