import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
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
  // user: string = '';
  // constructor(private authService: AuthService) {}

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private authService: AuthService
  ) {}
  showDropDown() {
    if (this.username) {
      this.DropDown = !this.DropDown;
    }
  }

  ngDoCheck() {
    this.username = this.document.defaultView?.localStorage
      ?.getItem('username')
      ?.split(' ')[0];
    const counter =
      this.document.defaultView?.localStorage?.getItem('cartCounter');
    if (counter) {
      this.cartCounter = JSON.parse(counter);
    }

    // console.log(this.username);
  }

  logout() {
    this.username = '';
    this.authService.logout();
    this.DropDown = !this.DropDown;
    // console.log('logout');
  }
}
