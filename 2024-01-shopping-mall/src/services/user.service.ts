import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserModel | undefined;

  setUser(email: string, password: string) {
    this.user = {
      email,
      password
    }
  };

  isLoggedin(): boolean {
    console.log(this.user);
    return this.user?.email ? true: false;
  }

  logout() {
    this.user = undefined;
  }
}
