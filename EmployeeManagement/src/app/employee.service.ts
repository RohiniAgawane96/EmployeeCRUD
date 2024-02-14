import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // constructor() { }
  http = inject(HttpClient);
  baseURL= 'http://localhost:3000/Employee';

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURL}`)
  }

  createEmployee(employee:Employee){
   return this.http.post(`${this.baseURL}`,employee)
  }
}
