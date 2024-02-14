import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // constructor() { }
  http = inject(HttpClient);
  api= 'http://localhost:3000/Employee';

  getAllEmployee(){}

  createEmployee(){}
}
