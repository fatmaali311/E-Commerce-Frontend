import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  image: string;
  status: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    RatingModule
  ],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'The quality of the products exceeded my expectations. Fast shipping and excellent customer service. Will definitely shop here again!',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      status: 'Verified Buyer'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'I\'ve ordered multiple times from this store and I\'m always impressed with their selection and service. Highly recommend!',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      status: 'Verified Buyer'
    },
    {
      name: 'Emily Rodriguez',
      rating: 4.5,
      comment: 'Great prices and fast delivery. The product was exactly as described. Customer support was very helpful when I had questions.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      status: 'Verified Buyer'
    },
    {
      name: 'David Wilson',
      rating: 5,
      comment: 'Exceptional quality and service. The packaging was eco-friendly which I really appreciate. Will be a returning customer!',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      status: 'Verified Buyer'
    },
    {
      name: 'Jessica Kim',
      rating: 4,
      comment: 'Good products at reasonable prices. Delivery was faster than expected. Very satisfied with my purchase.',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      status: 'Verified Buyer'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
