import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  newEmployee = {
    fname:'',
    lname:'' 
  }

  constructor(private http: HttpClient, private router: Router) {}

  createEmployees(){
    this.http.post('http://localhost:3000/employees',this.newEmployee).subscribe({
      next: (res: any)=> {
        console.log(res);
        this.router.navigate(['employees'])
      },
      error: (err)=> {
        console.log(err);
      }
    })
    
  }

}
