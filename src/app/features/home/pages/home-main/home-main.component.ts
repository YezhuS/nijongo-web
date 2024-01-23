import {Component, inject} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {PATH} from '../../../../core/const/routes.constant';
import {ButtonGenericComponent} from '../../../../lib/button/button-generic/button-generic.component';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [RouterModule, ButtonGenericComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {
  protected router = inject(Router);
  protected path = PATH;
}
