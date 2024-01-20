import { Component } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';


@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      CommonModule
      
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  