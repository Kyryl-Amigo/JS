import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { Item } from '../../shared/models/item.model';
import { ItemCardComponent } from '../item-card/item-card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsListComponent {
  search = '';
  items$: Observable<Item[]>;

  constructor(private dataService: DataService) {
    this.items$ = this.dataService.getItems();
  }

  onSearchChange(value: string): void {
    this.dataService.setSearchQuery(value);
  }

  clearSearch(): void {
    this.search = '';
    this.dataService.setSearchQuery('');
  }

  trackById(index: number, it: Item) {
    return it.id;
  }

  onItemSelected(it: Item): void {
    console.log('Обраний елемент:', it);
  }
}
