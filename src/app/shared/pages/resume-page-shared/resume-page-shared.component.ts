import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {ItemLetterResumeSharedComponent} from '../../components/item-letter-resume-shared/item-letter-resume-shared.component';

@Component({
  selector: 'app-resume-page-shared',
  standalone: true,
  imports: [CommonModule, ItemLetterResumeSharedComponent],
  templateUrl: './resume-page-shared.component.html',
  styleUrl: './resume-page-shared.component.scss',
})
export class ResumePageSharedComponent {
  @Input() data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
