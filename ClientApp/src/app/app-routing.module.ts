import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './cpts/home/home.component';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },
  { 
    path: '', 
    loadChildren: () => { 
      return import('./cpts/home/home.module').then(m => m.HomeModule);
    }
  },
  { 
    path: '**',
    loadChildren: () => {
      return import('./cpts/nopath/nopath.module').then(m => m.NopathModule);
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
