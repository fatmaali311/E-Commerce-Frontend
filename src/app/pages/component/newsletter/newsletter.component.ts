import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FormsModule, ToastModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent {
  email: string = '';
  isSubmitting: boolean = false;

  constructor(private messageService: MessageService) {}

  subscribeNewsletter() {
    if (this.isSubmitting) return;

    if (!this.email) {
      this.showError('Please enter your email address');
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.showError('Please enter a valid email address');
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Subscribed!',
        detail: `Thank you for subscribing with ${this.email}`,
        life: 5000,
      });
      this.email = '';
      this.isSubmitting = false;
    }, 1000);
  }

  private validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  private showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 5000,
    });
  }
}
