import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  staffs: any;
  displayedColumns: string[];

  constructor(private route: Router, private staffService: StaffService) {
    this.displayedColumns = ['name', 'email', 'phone', 'permission'];
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.staffService.findAll().subscribe(v => {
      this.staffs = v;
    });
  }

  editStaff({ _id }) {
    this.route.navigate([`staff/edit/${_id}`]);
  }

  permission() {
    this.route.navigate([`staff/permission/`]);
  }

  addStaff() {
    const id = 1;
    this.route.navigate([`staff/add`]);
  }
}
