import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from './core/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent],
  template: '<app-layout></app-layout>',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
