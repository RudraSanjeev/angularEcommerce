import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log(user);
        this.email = '';
        this.password = '';
        this.router.navigate(['']);
      },
      error: (err: any) => {
        this.error = err.error;
        this.resetError();
      },
    });
  }
  resetError() {
    setTimeout(() => {
      this.error = '';
    }, 3000);
  }
}
