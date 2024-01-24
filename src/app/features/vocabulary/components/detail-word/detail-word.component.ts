import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WordTranslationValue, WordTypeEnum} from '../../model/word.model';
import {CommonModule} from '@angular/common';
import {ButtonGenericComponent} from '../../../../lib/button/button-generic/button-generic.component';

@Component({
  selector: 'app-detail-word',
  standalone: true,
  imports: [CommonModule, ButtonGenericComponent],
  templateUrl: './detail-word.component.html',
  styleUrl: './detail-word.component.scss',
})
export class DetailWordComponent {
  @Input() item!: WordTranslationValue;
  @Output() closeEvent = new EventEmitter<void>();

  protected type = WordTypeEnum;
}
