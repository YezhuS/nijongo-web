import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {PATH} from '../../../../core/const/routes.constant';
import {RoutesEnum} from '../../../../core/enum/routes.enum';

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {
  private router = inject(Router);
  protected routesEnum = RoutesEnum;

  protected goTo(path: RoutesEnum): void {
    switch (path) {
      case RoutesEnum.ALPHABET: {
        this.router.navigate([PATH.ALPHABET]);
        break;
      }
      case RoutesEnum.VOCABULARY: {
        this.router.navigate([PATH.VOCABULARY]);
        break;
      }
      case RoutesEnum.PARTICLE: {
        this.router.navigate([PATH.PARTICLE]);
        break;
      }
    }
  }
}
