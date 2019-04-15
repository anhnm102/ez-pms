import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  prefix = '/permissions';
  private _permission: Permission;

  constructor(private authService: AuthenticationService, private httpClient: HttpClient) {
    this._permission = new Permission();
  }

  get permission() {
    return this._permission;
  }

  setPermission(p) {
    if (this.authService.credentials.role === 'Owner') {
      this.permission.isOwner = true;
    }
    this._permission.actions = p.actions;
  }

  findAll() {
    return this.httpClient.get(this.prefix + '/all');
  }

  find() {
    return this.httpClient.get(this.prefix);
  }

  update(dto) {
    return this.httpClient.put(this.prefix, dto);
  }
}

export class Permission {
  actions = [];
  isOwner = false;

  hasPermissionOf(action: string) {
    return this.isOwner || this.actions.indexOf(action) >= 0;
  }

  canAddUser() {
    return this.hasPermissionOf('AddUser');
  }
  canEditUser() {
    return this.hasPermissionOf('EditUser');
  }
  canDeleteUser() {
    return this.hasPermissionOf('DeleteUser');
  }
  canFindOneUser() {
    return this.hasPermissionOf('FindOneUser');
  }
  canFindAllUser() {
    return this.hasPermissionOf('FindAllUser');
  }
  canAddCustomer() {
    return this.hasPermissionOf('AddCustomer');
  }
  canEditCustomer() {
    return this.hasPermissionOf('EditCustomer');
  }
  canDeleteCustomer() {
    return this.hasPermissionOf('DeleteCustomer');
  }
  canFindOneCustomer() {
    return this.hasPermissionOf('FindOneCustomer');
  }
  canFindAllCustomer() {
    return this.hasPermissionOf('FindAllCustomer');
  }
}
