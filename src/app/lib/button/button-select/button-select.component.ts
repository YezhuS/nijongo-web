import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonGenericComponent} from '../button-generic/button-generic.component';
import {CommonModule} from '@angular/common';
import {OptionsI} from '../../../core/model/core.model';

@Component({
  selector: 'app-button-select',
  standalone: true,
  imports: [ButtonGenericComponent, CommonModule],
  templateUrl: './button-select.component.html',
  styleUrl: './button-select.component.scss',
})
export class ButtonSelectComponent {
  @Input() options: OptionsI[] = [];
  @Input() orientation: 'column' | 'row' = 'row';
  @Output() valueOutput = new EventEmitter<OptionsI>();

  protected selectedItem: number = 0;

  ngOnInit(): void {
    this.sendValue();
  }

  protected selectItem(index: number): void {
    this.selectedItem = index;
    this.sendValue();
  }

  private sendValue(): void {
    this.valueOutput.emit(this.options[this.selectedItem]);
  }
}
