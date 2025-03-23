import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { SignInFormData } from '../../../../models/auth.model';
import bcrypt from 'bcryptjs';
import { SALT } from '../../../../config';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  imports: [CommonModule, FormsModule, RouterLink],
})
export class SignInComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const data : SignInFormData = {
      email: this.email,
      password: bcrypt.hashSync(this.password, SALT)
    }
    this.authService.signIn(data).subscribe(users => {
      if (users.length > 0 && users[0].password === data.password) {
        this.authService.setCurrentUser(users[0]);
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
