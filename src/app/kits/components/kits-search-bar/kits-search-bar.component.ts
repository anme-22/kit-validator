import { Component, EventEmitter, Output } from '@angular/core';
import { PrimengModule } from '../../../shared/primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kits-search-bar',
  imports: [CommonModule, FormsModule, PrimengModule],
  templateUrl: './kits-search-bar.component.html',
  styleUrl: './kits-search-bar.component.css',
})
export class KitsSearchBarComponent {
  @Output() searchChange = new EventEmitter<string>();
  searchText: string = '';

  search(text: string): void {
    this.searchChange.emit(text);
  }
}
