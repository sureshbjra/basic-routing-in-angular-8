import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

   getEmployeeById(id){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
   }
}
