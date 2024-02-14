import { Component, inject } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private fb: FormBuilder) { }

  RegistrationForm= this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    gender: ['', Validators.required]
  })
  


  onSubmit(){}

}
