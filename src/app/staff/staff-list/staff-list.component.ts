import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  items;

  constructor(private route: Router, private staffService: StaffService) {}

  ngOnInit() {
    this.list();
  }

  list() {
    this.staffService.findAll().subscribe(v => {
      this.items = v;
    });
  }

  editStaff(staff) {
    console.log(staff);
  }

  addStaff() {
    const id = 1;
    // this.route.navigate([`edit/${id}`]);
  }
}
