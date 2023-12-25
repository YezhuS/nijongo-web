import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {ItemsNavigation, ItemsOption} from '../../const/menuItems.constant';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, ToolbarModule, MenuModule, ButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  itemsNavigation: MenuItem[] | undefined;
  itemsOptions: MenuItem[] | undefined;

  constructor() {
    this.itemsNavigation = ItemsNavigation;
    this.itemsOptions = ItemsOption;
  }
}
