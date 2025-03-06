import { Component } from '@angular/core';
import { PrimengModule } from '../../primeng/primeng.module';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  imports: [PrimengModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  items: MenuItem[] = [
    {
      label: 'Escanear Qr',
      icon: 'pi pi-qrcode',
      routerLink: ['/home/scan'],
      routerLinkActive: 'text-white bg-gob-100',
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Kit Entregados',
      icon: 'pi pi-list',
      routerLink: ['/home/kits-delivered'],
      routerLinkActive: 'text-white bg-gob-100',
      routerLinkActiveOptions: { exact: true },
    },
    {
      label: 'Configuración',
      icon: 'pi pi-cog',
      routerLink: ['/home/settings'],
      routerLinkActive: 'text-white bg-gob-100',
      routerLinkActiveOptions: { exact: true },
    },
  ];
  sidebarVisible: boolean = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
