import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'add',component:AddEmployeeComponent},
  {path:'view', component:ViewDetailsComponent},
  {path:'update', component:UpdateEmployeeComponent},
  {path:'list', component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
