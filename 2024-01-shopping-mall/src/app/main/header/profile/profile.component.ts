import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  userService = inject(UserService);
  router = inject(Router);

  logout(e: Event) {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
