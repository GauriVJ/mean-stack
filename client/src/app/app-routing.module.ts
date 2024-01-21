import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
const routes: Routes = [
    {path:'', redirectTo: 'add-employee', pathMatch: 'full'},
    {path: 'employees', component:EmployeesComponent},
    {path: 'add-employee', component:AddEmployeeComponent},
    {path: 'edit-employee/:id', component:EditEmployeeComponent} 
]  


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  