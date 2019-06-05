import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  prefix = '/users';
  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get(this.prefix);
  }

  findById(id) {
    return this.httpClient.get(`${this.prefix}/${id}`);
  }

  create(user) {
    return this.httpClient.post(this.prefix, user);
  }

  update(user, id) {
    return this.httpClient.put(`${this.prefix}/${id}`, user);
  }

  delete(id) {
    return this.httpClient.delete(`${this.prefix}/${id}`);
  }
}
