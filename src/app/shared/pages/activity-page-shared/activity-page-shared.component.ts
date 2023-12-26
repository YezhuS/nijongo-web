import {Component} from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-activity-page-shared',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './activity-page-shared.component.html',
  styleUrl: './activity-page-shared.component.scss',
})
export class ActivityPageSharedComponent {}
