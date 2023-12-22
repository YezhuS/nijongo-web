import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {HomeMainComponent} from './pages/home-main/home-main.component';
import {RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [HomeComponent, HomeMainComponent],
  imports: [CommonModule, HomeRoutingModule, RouterOutlet],
})
export class HomeModule {}
