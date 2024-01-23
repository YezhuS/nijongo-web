import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-generic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-generic.component.html',
  styleUrl: './button-generic.component.scss',
})
export class ButtonGenericComponent {
  @Input() label = '';
  @Input() type: 'circle' | 'rounded' | null = null;
  @Input() iconType = '';
}
