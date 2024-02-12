import { Component } from '@angular/core';

@Component({
  selector: 'Footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
