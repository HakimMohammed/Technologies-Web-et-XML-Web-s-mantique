// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sing-in/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sing-up/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}