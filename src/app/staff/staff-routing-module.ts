import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffComponent } from './staff.component';

const routes: Routes = [
  {
    path: '',
    component: StaffComponent,
    children: [
      { path: '', component: StaffListComponent, data: { title: extract('Staff') } },
      { path: 'add', component: StaffEditComponent, data: { title: extract('Staff Add') } },
      { path: 'edit/:id', component: StaffEditComponent, data: { title: extract('Staff Edit') } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StaffRoutingModule {}
