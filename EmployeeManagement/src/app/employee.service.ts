import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // constructor() { }
  http = inject(HttpClient);
  
}
