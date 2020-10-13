import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntersectionObserverDirective } from './intersection-observer.directive';



@NgModule({
  declarations: [HomeComponent, IntersectionObserverDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ScrollingModule
  ]
})
export class HomeModule { }
