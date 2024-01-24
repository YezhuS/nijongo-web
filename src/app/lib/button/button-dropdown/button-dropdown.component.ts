import {CommonModule} from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import {ButtonGenericComponent} from '../button-generic/button-generic.component';
import {MenuItemOptions} from '../../model/menuItem.interface';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-button-dropdown',
  standalone: true,
  imports: [CommonModule, ButtonGenericComponent, RouterModule],
  templateUrl: './button-dropdown.component.html',
  styleUrl: './button-dropdown.component.scss',
})
export class ButtonDropdownComponent {
  @Input() label = '';
  @Input() iconType = '';
  @Input() options: MenuItemOptions[] = [];
  @Input() position: 'right' | 'left' = 'left';
  @Output() outputValue = new EventEmitter<MenuItemOptions>();
  protected isDropdownOpen = false;

  constructor(private elementRef: ElementRef) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  handleOptionClick(arg0: MenuItemOptions) {
    this.outputValue.emit(arg0);
    this.toggleDropdown();
  }

  // TODO doesnt work on android
  @HostListener('document:click', ['$event'])
  outsideClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}
