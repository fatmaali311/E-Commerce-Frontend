import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-charts',
  imports: [ CommonModule,
    ChartModule,
    CardModule,
    AvatarModule,
    ButtonModule,
  
    InputTextModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {
// Revenue vs Costs Chart Data
revenueCostChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: '#3B82F6',
      data: [65000, 59000, 80000, 81000, 56000, 55000]
    },
    {
      label: 'Costs',
      backgroundColor: '#EF4444',
      data: [28000, 48000, 40000, 19000, 86000, 27000]
    }
  ]
};

revenueCostChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Purchase Summary Chart Data
purchaseSummaryChartData = {
  labels: ['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'],
  datasets: [
    {
      data: [300, 150, 100, 50, 50],
      backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'],
      hoverBackgroundColor: ['#2563EB', '#059669', '#D97706', '#7C3AED', '#DB2777']
    }
  ]
};

purchaseSummaryChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%'
};

purchaseSummaryData = [
  { name: 'Electronics', value: '$300', color: '#3B82F6' },
  { name: 'Fashion', value: '$150', color: '#10B981' },
  { name: 'Home', value: '$100', color: '#F59E0B' },
  { name: 'Beauty', value: '$50', color: '#8B5CF6' },
  { name: 'Sports', value: '$50', color: '#EC4899' }
];
}
