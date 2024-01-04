import {CommonModule} from '@angular/common';
import {Component, Input, inject} from '@angular/core';
import {ItemLetterResumeSharedComponent} from '../../components/item-letter-resume-shared/item-letter-resume-shared.component';
import {TabViewModule} from 'primeng/tabview';
import {TabI} from '../../models/tab.model';
import {LetterI} from '../../models/itemLetter.model';
import {ButtonModule} from 'primeng/button';
import {Router} from '@angular/router';
import {FULL_ROUTE} from '../../../core/const/routes.constant';

@Component({
  selector: 'app-resume-page-shared',
  standalone: true,
  imports: [
    CommonModule,
    ItemLetterResumeSharedComponent,
    TabViewModule,
    ButtonModule,
  ],
  templateUrl: './resume-page-shared.component.html',
  styleUrl: './resume-page-shared.component.scss',
})
export class ResumePageSharedComponent {
  protected router = inject(Router);

  protected paths = FULL_ROUTE;
  @Input() tabs: TabI<LetterI[]>[] = [];
  @Input() previousPath: string = '';
}
