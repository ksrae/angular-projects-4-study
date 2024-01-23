import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [
    NgIf,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  userService = inject(UserService);
  isLoggedIn = this.userService.isLoggedin();
}
