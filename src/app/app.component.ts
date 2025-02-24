import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { Router } from '@angular/router';
import { Toast } from 'primeng/toast';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, MenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  showMenu = true;
  title = 'kit-validator-platform-frontend';

  constructor(private primeng: PrimeNG, private router: Router) {
    this.router.events.subscribe(() => {
      // Oculta el menú solo en la ruta "/login"
      this.showMenu = this.router.url !== '/auth';
    });
  }
}
