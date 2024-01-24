import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ItemsNavigation, ItemsOption} from '../../const/menuItems.constant';
import {ButtonDropdownComponent} from '../../../lib/button/button-dropdown/button-dropdown.component';
import {MenuItemOptions} from '../../../lib/model/menuItem.interface';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, ButtonDropdownComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  protected itemsNavigation: MenuItemOptions[];
  protected itemsOptions: MenuItemOptions[];

  constructor() {
    this.itemsNavigation = ItemsNavigation;
    this.itemsOptions = ItemsOption;
  }
}
