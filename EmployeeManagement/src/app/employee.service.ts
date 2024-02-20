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

  getEmployeesList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: any) {
    return this.http.post<any>(this.baseURL, employee);
  }

  getEmployeeById(id:number){
    return this.http.get<any>(`${this.baseURL}/${id}`);
  }

  update(id: number, employee: any) {
    return this.http.put<any>(`${this.baseURL}/${id}`, employee);
  }  

  delete(id:number){
    return this.http.delete<any>(`${this.baseURL}/${id}`);
  }
  
}