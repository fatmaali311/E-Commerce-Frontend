import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
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
import { UserDetailDialogComponent } from '../user/user-detail-dialog/user-detail-dialog.component';
import { UserEditDialogComponent } from '../user/user-edit-dialog/user-edit-dialog.component';
@Component({
  selector: 'app-user-management',
  templateUrl: './manage-user.component.html',
  providers: [MessageService, ConfirmationService],
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
    UserDetailDialogComponent,
    UserEditDialogComponent,
  ],
  styleUrl: './manage-user.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ManageUserComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  viewDialog: boolean = false;
  editDialog: boolean = false;
  loading: boolean = true;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (response: any) => {
        this.users = response.data.users;
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load users',
        });
        this.loading = false;
        console.error('Error loading users', error);
      },
    });
  }

  viewUser(user: User): void {
    this.selectedUser = { ...user };
    this.viewDialog = true;
  }

  editUser(user: User): void {
    this.selectedUser = { ...user };
    this.editDialog = true;
  }

  deleteUser(user: User): void {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${user.firstName} ${user.lastName}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (user._id) {
          this.userService.deleteUser(user._id).subscribe({
            next: () => {
              this.users = this.users.filter((u) => u._id !== user._id);
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'User deleted successfully',
              });
            },
            error: (error) => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Failed to delete user',
              });
              console.error('Error deleting user', error);
            },
          });
        }
      },
    });
  }

  hideDialog(): void {
    this.viewDialog = false;
    this.editDialog = false;
    this.selectedUser = null;
  }

  getSeverity(status: boolean): string {
    return status ? 'success' : 'danger';
  }

  onUserUpdated(updatedUser: User): void {
    const index = this.users.findIndex((u) => u._id === updatedUser._id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
    this.editDialog = false;
  }
}
