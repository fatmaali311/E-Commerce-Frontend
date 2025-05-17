import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    DividerModule,
    ReactiveFormsModule,
    ToastModule,
    AccordionModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [MessageService],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      //  send the form data to  backend
      console.log('Form submitted:', this.contactForm.value);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Your message has been sent!',
      });
      this.contactForm.reset();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill out all required fields correctly',
      });
    }
  }

  contactMethods = [
    {
      icon: 'pi pi-map-marker',
      title: 'Visit Us',
      details: '123 Commerce Street\nBusiness City, BC 12345',
    },
    {
      icon: 'pi pi-phone',
      title: 'Call Us',
      details: '+1 (555) 123-4567\nMon-Fri: 9am-5pm EST',
    },
    {
      icon: 'pi pi-envelope',
      title: 'Email Us',
      details: 'support@nexusshop.com\nresponse within 24 hours',
    },
  ];
  faqs = [
    {
      question: 'How can I track my order?',
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's website to track your package.",
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy for most items. Items must be unused and in original packaging. Some exclusions apply.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes! We ship to over 100 countries worldwide. Shipping costs and delivery times vary by destination.',
    },
    {
      question: 'How can I contact customer service?',
      answer:
        'You can reach our customer service team 24/7 via email at support@nexusshop.com or by phone during business hours at +1 (555) 123-4567.',
    },
  ];

}