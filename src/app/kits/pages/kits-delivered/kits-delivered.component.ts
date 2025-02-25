import { Component, OnInit, ViewChild } from '@angular/core';
import { KitsTableComponent } from '../../components/kits-table/kits-table.component';
import { KitsSearchBarComponent } from '../../components/kits-search-bar/kits-search-bar.component';
import { CommonModule } from '@angular/common';

interface Persona {
  id: string;
  nombre: string;
  telefono: string;
}

@Component({
  selector: 'app-kits-delivered',
  imports: [KitsSearchBarComponent, KitsTableComponent, CommonModule],
  templateUrl: './kits-delivered.component.html',
  styleUrl: './kits-delivered.component.css',
})
export class KitsDeliveredComponent {
  personas: Persona[] = [];
  filteredPersonas: Persona[] = [];
  searchText: string = '';

  ngOnInit() {
    // Datos de ejemplo, estos pueden venir de un servicio
    this.personas = [
      { id: '0801-1990-12345', nombre: 'Juan Pérez', telefono: '9876-5432' },
      { id: '0501-1985-67890', nombre: 'María López', telefono: '8765-4321' },
      {
        id: '0101-1992-54321',
        nombre: 'Carlos Rodríguez',
        telefono: '9988-7766',
      },
      { id: '0301-1988-09876', nombre: 'Ana García', telefono: '8877-6655' },
      {
        id: '0901-1995-13579',
        nombre: 'Pedro Martínez',
        telefono: '9900-8877',
      },
      {
        id: '0601-1982-24680',
        nombre: 'Laura Hernández',
        telefono: '8811-2233',
      },
      {
        id: '0401-1993-97531',
        nombre: 'Roberto Sánchez',
        telefono: '9922-3344',
      },
    ];
    this.filteredPersonas = [...this.personas];
  }

  onSearch(text: string): void {
    this.searchText = text;

    if (text.trim() === '') {
      this.filteredPersonas = [...this.personas];
      return;
    }

    const searchLower = text.toLowerCase();
    this.filteredPersonas = this.personas.filter(
      (p) =>
        p.id.toLowerCase().includes(searchLower) ||
        p.nombre.toLowerCase().includes(searchLower) ||
        p.telefono.toLowerCase().includes(searchLower)
    );
  }
}
