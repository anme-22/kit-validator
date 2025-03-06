import { Component } from '@angular/core';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { MenuComponent } from '../../../shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from '../../../shared/components/sidebar-menu/sidebar-menu.component';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  //  imports: [ QrcodeScannerComponent],
  imports: [
    PrimengModule,
    CommonModule,
    RouterModule,
    MenuComponent,
    SidebarMenuComponent,
  ],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  isHandset$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map((result) => result.matches));
  }
}
