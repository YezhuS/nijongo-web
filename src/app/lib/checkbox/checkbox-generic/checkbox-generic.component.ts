import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox-generic',
  standalone: true,
  imports: [],
  templateUrl: './checkbox-generic.component.html',
  styleUrl: './checkbox-generic.component.scss',
})
export class CheckboxGenericComponent {
  @Input() label = '';
  @Output() valueChange = new EventEmitter<boolean>();

  protected isSelected = false;

  protected changeCheck() {
    this.isSelected = !this.isSelected;
    this.valueChange.emit(this.isSelected);
  }
}
