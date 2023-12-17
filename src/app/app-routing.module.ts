import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Employee/list/list.component';
import { AddComponent } from './Employee/add/add.component';

const routes: Routes = [
  {path:'' , redirectTo: 'user/list' , pathMatch: 'full'},
  {path:'user/list' , component: ListComponent},
  {path:'user/add' , component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
