import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StaffRoutingModule } from './staff-routing-module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StaffService } from './staff.service';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, ReactiveFormsModule, FlexLayoutModule, StaffRoutingModule],
  declarations: [StaffComponent, StaffListComponent, StaffEditComponent],
  providers: [StaffService]
})
export class StaffModule {}
