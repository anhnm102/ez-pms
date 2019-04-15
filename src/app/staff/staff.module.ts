import { NgModule } from '@angular/core';
import { StaffComponent } from './staff.component';
import { SharedModule } from '../shared';
import { StaffRoutingModule } from './staff-routing-module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StaffService } from './staff.service';
import { PermissionComponent } from './permission/permission.component';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule, FormsModule, StaffRoutingModule],
  declarations: [StaffComponent, StaffListComponent, StaffEditComponent, PermissionComponent],
  providers: [StaffService]
})
export class StaffModule {}
