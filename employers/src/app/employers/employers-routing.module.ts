import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersListComponent } from './employers-list/employers-list.component';

const routes: Routes = [
  {
    path: "employes/list",
    component: EmployersListComponent
  },
  {
    path: '',
    component: EmployersListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployersRoutingModule { }
