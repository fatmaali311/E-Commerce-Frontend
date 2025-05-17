import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-nav-dashboard',
  imports: [AvatarModule, CommonModule,
    ChartModule,
    CardModule,
    AvatarModule,
    ButtonModule,
    InputTextModule,
  RouterOutlet,
  RouterLink],
  templateUrl: './nav-dashboard.component.html',
  styleUrl: './nav-dashboard.component.css'
})
export class NavDashboardComponent implements OnInit {
  _AuthService=inject(AuthService)
  isLogin:Boolean=false
  ngOnInit(): void {
      this._AuthService.userInfo.subscribe({
        next: (res)=>{
          console.log("user's token: ", res)
          this.isLogin= res? true : false
        },
        error: (err)=>{console.log(err)}
      })
  }
  logOut(){
    this._AuthService.logOut()
  }

}
