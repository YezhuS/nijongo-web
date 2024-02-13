import {CommonModule} from '@angular/common';
import {Component, Input, inject} from '@angular/core';
import {ItemLetterResumeSharedComponent} from '../../components/item-letter-resume-shared/item-letter-resume-shared.component';
import {TabI} from '../../../lib/model/tab.model';
import {LetterI} from '../../models/itemLetter.model';
import {Router} from '@angular/router';
import {FULL_ROUTE} from '../../../core/const/routes.constant';
import {ButtonGenericComponent} from '../../../lib/button/button-generic/button-generic.component';
import {RoutesEnum} from '../../../core/enum/routes.enum';
import {TabComponent} from '../../../lib/tab/tab.component';

@Component({
  selector: 'app-resume-page-shared',
  standalone: true,
  imports: [
    CommonModule,
    ItemLetterResumeSharedComponent,
    ButtonGenericComponent,
    TabComponent,
  ],
  templateUrl: './resume-page-shared.component.html',
  styleUrl: './resume-page-shared.component.scss',
})
export class ResumePageSharedComponent {
  protected router = inject(Router);
  protected paths = FULL_ROUTE;
  protected itemSelected = RoutesEnum.HIRAGANA;
  protected routesEnum = RoutesEnum;
  @Input() tabs: TabI<LetterI[]>[] = [];
  @Input() previousPath: string = '';

  protected tabSelected: TabI<LetterI[]> = {
    title: '',
    content: [],
  };

  ngOnInit(): void {
    this.tabSelected = this.tabs[0];
  }

  ngOnChanges(): void {
    if (this.router.url.includes(RoutesEnum.HIRAGANA))
      this.itemSelected = RoutesEnum.HIRAGANA;
    if (this.router.url.includes(RoutesEnum.KATAKANA))
      this.itemSelected = RoutesEnum.KATAKANA;
    if (this.router.url.includes(RoutesEnum.KANJI))
      this.itemSelected = RoutesEnum.KANJI;
  }

  protected selectTab(value: TabI<LetterI[]>): void {
    this.tabSelected = value;
  }
}
