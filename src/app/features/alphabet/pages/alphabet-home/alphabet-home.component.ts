import {Component, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Router} from '@angular/router';
import {FULL_ROUTE, PATH} from '../../../../core/const/routes.constant';

@Component({
  selector: 'app-alphabet-home',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './alphabet-home.component.html',
  styleUrl: './alphabet-home.component.scss',
})
export class AlphabetHomeComponent {
  protected router = inject(Router);
  protected path = FULL_ROUTE;
}
