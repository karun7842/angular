import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Include FormsModule here
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
email: any;
onSubmit() {
throw new Error('Method not implemented.');
}
  username: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onResetPassword(): void {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = "Passwords don't match!";
      return;
    }
    this.authService.resetPassword(this.username, this.newPassword).subscribe(user => {
      if (user) {
        this.router.navigate(['/sign-in']);
      } else {
        this.errorMessage = 'User not found!';
      }
    });
  }
}
