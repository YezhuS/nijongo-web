import {Component, EventEmitter, Inject, Output, inject} from '@angular/core';
import {WordTranslationValue, WordTypeEnum} from '../../model/word.model';
import {CommonModule} from '@angular/common';
import {ButtonGenericComponent} from '../../../../lib/button/button-generic/button-generic.component';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'app-detail-word',
  standalone: true,
  imports: [CommonModule, ButtonGenericComponent],
  templateUrl: './detail-word.component.html',
  styleUrl: './detail-word.component.scss',
})
export class DetailWordComponent {
  protected type = WordTypeEnum;

  constructor(
    protected dialogRef: DialogRef<DetailWordComponent>,
    @Inject(DIALOG_DATA) protected item: WordTranslationValue
  ) {}
}
