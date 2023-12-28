import {Component, inject} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {PATH} from '../../../../core/const/routes.constant';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {
  protected router = inject(Router);
  protected path = PATH;
}
