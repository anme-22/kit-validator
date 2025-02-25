import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface Persona {
  id: string;
  nombre: string;
  telefono: string;
}

@Component({
  selector: 'app-kits-table',
  imports: [CommonModule, TableModule],
  templateUrl: './kits-table.component.html',
  styleUrl: './kits-table.component.css',
})
export class KitsTableComponent {
  @Input() data: Persona[] = [];
  @Input() globalFilterValue: string = '';
}
