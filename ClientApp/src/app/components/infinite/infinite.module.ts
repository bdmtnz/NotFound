import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteComponent } from './infinite.component';
import { InfiniteRoutingModule } from './infinite-routing.module';



@NgModule({
  declarations: [InfiniteComponent],
  imports: [
    CommonModule,
    InfiniteRoutingModule
  ]
})
export class InfiniteModule { }
