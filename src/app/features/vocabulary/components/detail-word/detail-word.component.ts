import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  WordI,
  WordTranslationValue,
  WordTypeEnum,
} from '../../model/word.model';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-detail-word',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './detail-word.component.html',
  styleUrl: './detail-word.component.scss',
})
export class DetailWordComponent {
  @Input() item!: WordTranslationValue;
  @Output() closeEvent = new EventEmitter<void>();

  protected type = WordTypeEnum;
}
