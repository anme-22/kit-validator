import { Component } from '@angular/core';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { MenuComponent } from '../../../shared/components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  //  imports: [ QrcodeScannerComponent],
  imports: [PrimengModule, CommonModule, RouterModule, MenuComponent],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
