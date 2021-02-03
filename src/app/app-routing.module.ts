import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { First1Component } from './first1/first1.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
   {path:'' , component:First1Component},
   {path:'next/:id' , component:SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
