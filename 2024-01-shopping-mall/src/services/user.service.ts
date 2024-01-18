import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: UserModel;

  setUser(email: string) {
    this.user = {
      email
    }
  };

  hasUser(): boolean {
    return this.user?.email ? true: false;
  }
}
