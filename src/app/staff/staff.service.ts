import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get('/users');
  }

  findById(id) {
    return this.httpClient.get('/users/' + id);
  }

  create(user) {
    return this.httpClient.post('/users', user);
  }

  delete(id) {
    return this.httpClient.delete('/users/' + id);
  }
}
