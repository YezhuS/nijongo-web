import {Component, Input} from '@angular/core';
import {LetterI} from '../../models/itemLetter.model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-item-letter-resume-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-letter-resume-shared.component.html',
  styleUrl: './item-letter-resume-shared.component.scss',
})
export class ItemLetterResumeSharedComponent {
  @Input() item!: LetterI;
}
