import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TabI} from '../model/tab.model';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  @Input() tabs: TabI<any>[] = [];
  @Input() activeTab = '';
  @Input() classTab: 'horizontal' | 'vertical' = 'horizontal';
  @Input() classItem = '';
  @Output() selectedTab = new EventEmitter<TabI<any>>();

  selectTab(tab: TabI<any>) {
    if (tab.disabled) {
      return;
    }
    this.activeTab = tab.title;
    this.selectedTab.emit(tab);
  }
}
