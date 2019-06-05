import { Component, OnInit } from '@angular/core';
import { PermissionService } from './permission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
  high;
  medium;
  low;
  actionsList = [
    {
      action: 'AddUser',
      check: false
    },
    {
      action: 'EditUser',
      check: false
    },
    {
      action: 'DeleteUser',
      check: false
    },
    {
      action: 'FindAllUser',
      check: false
    },
    {
      action: 'FindOneUser',
      check: false
    },
    {
      action: 'AddCustomer',
      check: false
    },
    {
      action: 'EditCustomer',
      check: false
    },
    {
      action: 'DeleteCustomer',
      check: false
    },
    {
      action: 'FindAllCustomer',
      check: false
    },
    {
      action: 'FindOneCustomer',
      check: false
    }
  ];

  constructor(private permissionService: PermissionService, private router: Router) {}

  ngOnInit() {
    this.permissionService.find().subscribe(p => {
      const permissionDetail = (<any>p).permissionDetail;
      const low = permissionDetail.find(d => d.level === 'Low');
      const medium = permissionDetail.find(d => d.level === 'Medium');
      const high = permissionDetail.find(d => d.level === 'High');

      this.low = this.actionsList.map(a => {
        if (low && low.actions && low.actions.indexOf(a.action) >= 0) {
          a.check = true;
        }
        return { ...a };
      });

      this.medium = this.actionsList.map(a => {
        if (medium && medium.actions && medium.actions.indexOf(a.action) >= 0) {
          a.check = true;
        }
        return { ...a };
      });

      this.high = this.actionsList.map(a => {
        if (high && high.actions && high.actions.indexOf(a.action) >= 0) {
          a.check = true;
        }
        return { ...a };
      });
    });
  }

  save() {
    const low = this.low.filter(v => v.check).map(v => v.action);
    const medium = this.medium.filter(v => v.check).map(v => v.action);
    const high = this.high.filter(v => v.check).map(v => v.action);
    const data = [
      {
        level: 'Low',
        actions: low
      },
      {
        level: 'Medium',
        actions: medium
      },
      {
        level: 'High',
        actions: high
      }
    ];

    this.permissionService.update({ permissionDetail: data }).subscribe(rs => {
      console.log(rs);
    });
  }

  cancel() {
    this.router.navigate(['/staff']);
  }
}
