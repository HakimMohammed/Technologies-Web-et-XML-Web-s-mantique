import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../../models/user.model';
import { v4 } from 'uuid';
import bcrypt from 'bcryptjs';
import { SALT } from '../../../../config';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  imports: [CommonModule, FormsModule, RouterLink],
})

export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const user : User = {
      id: v4(),
      name: this.name,
      email: this.email,
      password: bcrypt.hashSync(this.password, SALT)
    }

    this.authService.signUp(user).subscribe(() => {
      this.authService.setCurrentUser(user);
      this.router.navigate(['/dashboard']);
    });
      
  }
}
