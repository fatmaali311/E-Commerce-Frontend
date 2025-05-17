import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { User } from '../../../../models/user';
@Component({
  selector: 'app-user-detail-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    CheckboxModule,
    TagModule,
    RippleModule,
    ProgressSpinnerModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './user-detail-dialog.component.html',
  styleUrl: './user-detail-dialog.component.css',
})
export class UserDetailDialogComponent {
  @Input() visible: boolean = false;
  @Input() user: User | null = null;
  @Output() onHide = new EventEmitter<void>();

  getSeverity(status: boolean): string {
    return status ? 'success' : 'danger';
  }

  hideDialog(): void {
    this.onHide.emit();
  }
}
