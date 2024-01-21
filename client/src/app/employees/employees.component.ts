import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  title = 'client';
  employees: any = [];
  
  newEmployee = {
    fname:'',
    lname:'' 
  }

  constructor(private http: HttpClient, private router: Router, private activatedRoute:ActivatedRoute) {}
  ngOnInit(){
   this.http.get('http://localhost:3000/employees').subscribe({
    next: (res: any) =>  {
      this.employees = res.employee; 
    }
   })
  }

  getEmployees() {
    this.http.get('http://localhost:3000/employees').subscribe({
      next: (res: any)=> {
        console.log(res);
        this.employees = res.employee; 
        this.newEmployee.fname = '';
        this.newEmployee.lname = '';
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  deleteEmployees(id: number){
    this.http.delete('http://localhost:3000/employees/'+id).subscribe({
      next: (res: any)=> {
        console.log(res);
        this.getEmployees();
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  updateEmployees(id: number){
    this.router.navigate(['/edit-employees', id])
  }
}
