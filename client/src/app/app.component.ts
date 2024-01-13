import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe({
      next: (res)=> {
        console.log(res);
      },
      error: (err)=> {
        console.log(err);
      }
    })
  }
}
