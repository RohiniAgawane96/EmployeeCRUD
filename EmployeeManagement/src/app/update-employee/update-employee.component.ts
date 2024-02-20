import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id!: number;
fb = inject(FormBuilder);
employeeservice = inject(EmployeeService);
router = inject(Router);
activatedRoute = inject(ActivatedRoute)
  
RegistrationForm= this.fb.group({
  name: ['', [Validators.required, Validators.minLength(5)]],
  email: ['', [Validators.required, Validators.email]],
  contact: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
  gender: ['', Validators.required],
  DOB:['',Validators.required]
})
  
ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.params['id'];
  this.employeeservice.getEmployeeById(this.id).subscribe(employee => {
    this.RegistrationForm.patchValue(employee); // Pre-fill form with employee details
  });
}

onSubmit() {
  if (this.RegistrationForm.valid) {
    this.employeeservice.update(this.id, this.RegistrationForm.value).subscribe(data => {
      console.log("Employee updated successfully:", data);
      this.router.navigate(['/list']);
    });
  } else {
    console.log("Form is invalid. Cannot update employee.");
  }
}

// onSubmit(){
//   this.employeeservice.updateEmployee(this.id, this.employee).subscribe( data =>{
//   // this.goToEmployeeList();
//   }
//   , error => console.log(error));
//    }

}
