import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeservice = inject(EmployeeService);
  router = inject(Router);
  employees!: Employee[];


ngOnInit(): void {
  this.employeeservice.getEmployeesList().subscribe((data: any) => {
    this.employees = data;
  });
}
  
updateEmployee(id: number): void {
  this.router.navigate(['update', id]);
}

loadEmployees() {
  this.employeeservice.getEmployeesList().subscribe((data: Employee[]) => {
    this.employees = data;
  });
}

deleteEmployee(id: number) {
  this.employeeservice.delete(id).subscribe(
    () => {
      console.log(`Employee with ID ${id} deleted successfully.`);
      this.loadEmployees(); // Refresh the list after deletion
    },
    error => {
      console.error(`Error deleting employee with ID ${id}:`, error);
    }
  );
}

}
