import {Component} from '@angular/core';
import {CardModule} from 'primeng/card';

@Component({
  selector: 'app-item-letter-resume-shared',
  standalone: true,
  imports: [CardModule],
  templateUrl: './item-letter-resume-shared.component.html',
  styleUrl: './item-letter-resume-shared.component.scss',
})
export class ItemLetterResumeSharedComponent {}
