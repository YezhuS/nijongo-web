import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {FULL_ROUTE} from '../../../../core/const/routes.constant';
import {ButtonGenericComponent} from '../../../../lib/button/button-generic/button-generic.component';

@Component({
  selector: 'app-alphabet-home',
  standalone: true,
  imports: [ButtonGenericComponent],
  templateUrl: './alphabet-home.component.html',
  styleUrl: './alphabet-home.component.scss',
})
export class AlphabetHomeComponent {
  protected router = inject(Router);
  protected path = FULL_ROUTE;
}
