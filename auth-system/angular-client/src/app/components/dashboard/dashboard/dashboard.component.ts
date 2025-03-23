import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [CommonModule],
})
export class DashboardComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    if (!this.user) {
      this.router.navigate(['/signin']);
    }
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/signin']);
  }
}
