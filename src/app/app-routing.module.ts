import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizeComponent } from './visualize/visualize.component';

const routes: Routes = [
  {path:'', component:VisualizeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
