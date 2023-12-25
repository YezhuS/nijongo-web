import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
