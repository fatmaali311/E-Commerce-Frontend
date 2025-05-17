import { MessageService } from 'primeng/api';
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
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user-edit-dialog',
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
  templateUrl: './user-edit-dialog.component.html',
  styleUrl: './user-edit-dialog.component.css',
})
export class UserEditDialogComponent {
  @Input() visible: boolean = false;
  @Input() set user(value: User | null) {
    if (value) {
      this.prepareUserForm(value);
    }
  }
  @Output() onHide = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<User>();

  userForm: FormGroup;
  selectedFile: File | null = null;
  previewImage: string | ArrayBuffer | null = null;
  loading: boolean = false;

  roles: any[] = [
    { label: 'Client', value: 'client' },
    { label: 'Seller', value: 'seller' },
    { label: 'Admin', value: 'admin' },
  ];

  addressTypes: any[] = [
    { label: 'Billing', value: 'billing' },
    { label: 'Shipping', value: 'shipping' },
  ];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      _id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)],
      role: ['client', Validators.required],
      isActive: [true],
      isVerified: [false],
      profileImage: [''],
      addresses: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get addressesFormArray(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  }

  prepareUserForm(user: User): void {
    this.userForm.reset({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      isActive: user.isActive,
      isVerified: user.isVerified,
      profileImage: user.profileImage,
    });

    // Clear existing addresses
    while (this.addressesFormArray.length !== 0) {
      this.addressesFormArray.removeAt(0);
    }

    // Add addresses to form array
    if (user.addresses && user.addresses.length > 0) {
      user.addresses.forEach((address) => {
        this.addressesFormArray.push(this.createAddressFormGroup(address));
      });
    }
  }

  createAddressFormGroup(address?: any): FormGroup {
    return this.fb.group({
      _id: [address?._id || ''],
      type: [address?.type || 'billing', Validators.required],
      street: [address?.street || '', Validators.required],
      city: [address?.city || '', Validators.required],
      governerate: [address?.governerate || '', Validators.required],
      isDefault: [address?.isDefault || false],
    });
  }

  addNewAddress(): void {
    this.addressesFormArray.push(this.createAddressFormGroup());
  }

  removeAddress(index: number): void {
    this.addressesFormArray.removeAt(index);
  }

  onDefaultAddressChange(index: number): void {
    if (this.addressesFormArray.at(index).get('isDefault')?.value) {
      // Unset other default addresses
      this.addressesFormArray.controls.forEach((control, i) => {
        if (i !== index) {
          control.get('isDefault')?.setValue(false);
        }
      });
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
        this.userForm.patchValue({
          profileImage: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  }
saveUser(): void {
  if (this.userForm.invalid) {
    this.userForm.markAllAsTouched();
    this.messageService.add({
      severity: 'warn',
      summary: 'Validation Error',
      detail: 'Please fill all required fields correctly',
    });
    return;
  }

  const userData = this.userForm.value;
  const userId = userData._id;

  // Convert addresses to proper format if needed
  if (userData.addresses) {
    userData.addresses = userData.addresses.map((addr: any) => {
      if (addr._id === '') delete addr._id;
      return addr;
    });
  }

  this.loading = true;
  this.userService.updateUser(userId, userData).subscribe({
    next: (response: any) => {
      this.loading = false;
      const updatedUser = response.data.user;
      this.onSave.emit(updatedUser);
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'User updated successfully',
      });
    },
    error: (error) => {
      this.loading = false;
      console.error('Update error:', error);

      let errorMessage = 'Failed to update user';
      
      // Handle different error formats
      if (error.error?.message) {
        // Backend validation error
        errorMessage = error.error.message;
      } else if (error.error?.errors) {
        // Alternative error format
        errorMessage = Object.values(error.error.errors)
          .map((e: any) => e.message || e.msg || e)
          .join(', ');
      } else if (error.message) {
        // Generic error
        errorMessage = error.message;
      }

      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: errorMessage,
        life: 5000,
      });
    },
  });
}

  hideDialog(): void {
    this.onHide.emit();
    this.selectedFile = null;
    this.previewImage = null;
  }
}
