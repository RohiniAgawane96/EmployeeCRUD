import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import {NativeDateAdapter} from '@angular/material/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent { 

  // employee: Employee[]=[];
 
fb = inject(FormBuilder);
employeeservice = inject(EmployeeService);
router = inject(Router);

  RegistrationForm= this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    gender: ['', Validators.required],
    DOB:['',Validators.required]
  })
  
  
  ngOnInit(): void {
  }

  onSubmit(){    
      this.employeeservice.createEmployee(this.RegistrationForm.value).subscribe(data=>{
        console.log(data);
      });
      this.router.navigate(['/list'])
  }

  // onSubmit() {    
  //   if (this.RegistrationForm.valid) {
  //       this.employeeservice.createEmployee(this.RegistrationForm.value).subscribe(data => {
  //           console.log(data);
  //           this.router.navigate(['/list']);
  //       });
  //   } else {
  //       console.log("Form is invalid. Cannot submit.");
  //   }
}
