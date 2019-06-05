import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { extract } from '../core';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: '', component: CustomerListComponent, data: { title: extract('Customer List') } },
      { path: 'add', component: CustomerEditComponent, data: { title: extract('Customer Add') } },
      { path: 'edit/:id', component: CustomerEditComponent, data: { title: extract('Customer Edit') } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
