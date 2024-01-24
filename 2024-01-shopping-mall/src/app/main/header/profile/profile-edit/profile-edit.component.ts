import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../../services/user.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditComponent {
  userService = inject(UserService);
  router = inject(Router);

  user = this.userService.user;
  password = new FormControl('', [Validators.required]);
  newPassword = new FormControl('', [Validators.required]);
  newPasswordConfirm = new FormControl('', [Validators.required]);

  isValid = false;

  submit() {
    if(
      this.password.value === this.user?.password &&
      this.newPassword.value?.length &&
      this.newPassword.value === this.newPasswordConfirm.value
    ) {
      this.isValid = true;
      this.userService.setUser(this.user.email, this.newPassword.value);
      this.router.navigate(['/main/profile']);
    }
  }
}
