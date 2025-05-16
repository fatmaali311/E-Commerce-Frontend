import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-nav-dashboard',
  imports: [AvatarModule, CommonModule,
    ChartModule,
    CardModule,
    AvatarModule,
    ButtonModule,
    InputTextModule],
  templateUrl: './nav-dashboard.component.html',
  styleUrl: './nav-dashboard.component.css'
})
export class NavDashboardComponent {

}
