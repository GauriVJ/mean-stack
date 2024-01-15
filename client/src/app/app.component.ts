import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  users: any = [];
  tasks: any = ["test1", "test2", "test3"];

  newUser = {
    fname:'',
    lname:'' 
  }

  constructor(private http: HttpClient) {}


  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe({
      next: (res: any)=> {
        console.log(res);
        this.users = res.users; 
        this.newUser.fname = '';
        this.newUser.lname = '';
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  createUsers(){
    this.http.post('http://localhost:3000/users',this.newUser).subscribe({
      next: (res: any)=> {
        console.log(res);
        this.getUsers();
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

  deleteUsers(id: number){
    this.http.delete('http://localhost:3000/users/'+id).subscribe({
      next: (res: any)=> {
        console.log(res);
        this.getUsers();
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }

}


