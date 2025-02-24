import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuItems = [
    { name: 'Escanear QR', icon: 'fas fa-qrcode', route: '/scan-qr' },
    { name: 'Kit Entregados', icon: 'fas fa-box-open', route: '/kits' },
    { name: 'Configuración', icon: 'fas fa-cog', route: '/settings' },
  ];

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
