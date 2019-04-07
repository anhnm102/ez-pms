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
}
