import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent {

  id : any
  newEmployee = {
    fname:'',
    lname:'' 
  }


constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) {}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("userId"); //+ string to number
    });
  }

editEmployees(){
  this.activatedRoute.paramMap.subscribe((params) => {
    this.id = params.get("userId");
})

}
}
