import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'Header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  username: string | null = '';
  DropDown: boolean = false;
  constructor(private authService: AuthService) {}

  showDropDown() {
    this.DropDown = !this.DropDown;
  }
  // fullName = localStorage.getItem('username');
  ngOnInit() {
    // this.isLoggedIn = !!localStorage.getItem('accessToken');
    const fullName = localStorage.getItem('username');
    if (fullName) {
      this.username = fullName.split(' ')[0];
    }
  }
}
