import { NgModule } from '@angular/core';

import { EmployersRoutingModule } from './employers-routing.module';
import { EmployersListComponent } from './employers-list/employers-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployersListComponent
  ],
  imports: [
    NgxPaginationModule ,
    EmployersRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ]
})
export class EmployersModule { }
