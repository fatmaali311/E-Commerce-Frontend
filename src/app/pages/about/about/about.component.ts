import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TimelineModule } from 'primeng/timeline';
@Component({
  selector: 'app-about',
imports: [CommonModule , CardModule, DividerModule, ButtonModule,TimelineModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Visionary leader with 15+ years in e-commerce'
    },
    {
      name: 'Sarah Williams',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Tech enthusiast driving innovation'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      bio: 'Creating beautiful user experiences'
    }
  ];

  milestones = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Started with a small team and big dreams'
    },
    {
      year: '2020',
      title: 'First Million Customers',
      description: 'Reached our first major milestone'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Launched operations in 10 new countries'
    },
    {
      year: '2023',
      title: 'Award Winning Platform',
      description: 'Recognized as best e-commerce solution'
    }
  ];
}
