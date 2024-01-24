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
  @Input() shape?: 'circle' | 'rounded';
  @Input() background?: 'outline' | 'transparent';
  @Input() size?: 'big' | 'small';
  @Input() iconType = '';
  protected classButton = '';

  ngOnInit(): void {
    this.classButton = ` ${this.shape ?? ''} ${this.background ?? ''} ${
      this.size ?? ''
    }`;
  }
}
