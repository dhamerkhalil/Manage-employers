import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployersRoutingModule } from './employers-routing.module';
import { EmployersListComponent } from './employers-list/employers-list.component';


@NgModule({
  declarations: [
    EmployersListComponent
  ],
  imports: [
    CommonModule,
    EmployersRoutingModule
  ]
})
export class EmployersModule { }
