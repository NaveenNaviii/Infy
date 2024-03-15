import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes,RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes:Routes=[
  {path:"",component:DashboardComponent},
  {path:"contact",component:ContactComponent}
]


@NgModule({
  declarations: [
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  
})
export class ProductDashboardModule { }
