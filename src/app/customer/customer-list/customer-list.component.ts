import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: any;
  displayedColumns: string[];

  constructor(private route: Router, private customerService: CustomerService) {
    this.displayedColumns = ['name', 'email', 'phone'];
  }

  ngOnInit() {
    this.list();
  }

  list() {
    this.customerService.findAll().subscribe(v => {
      this.customers = v;
    });
  }

  editCustomer({ _id }) {
    this.route.navigate([`customer/edit/${_id}`]);
  }

  permission() {
    this.route.navigate([`customer/permission/`]);
  }

  addCustomer() {
    const id = 1;
    this.route.navigate([`customer/add`]);
  }
}
