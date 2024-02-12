import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'Header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  username: string | null = '';
  DropDown: boolean = false;
  cartCounter: number = 0;
  constructor(private authService: AuthService) {}

  showDropDown() {
    if (this.username) {
      this.DropDown = !this.DropDown;
    }
  }

  // async ngOnInit() {
  //   this.username = await localStorage.getItem('username');
  // }
  ngDoCheck() {
    this.username = localStorage.getItem('username').split(' ')[0];
  }

  logout() {
    this.username = '';
    this.authService.logout();
    console.log('logout');
  }
}
