import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
export class ItemsListComponent implements OnInit {
  // ✅ Лаб4: пошук (лишили)
  search = '';

  // ✅ Лаб5: тепер items НЕ містить mock тут — він буде приходити з сервісу
  items: Item[] = [];

  // ✅ Лаб5: інжектимо сервіс в конструктор
  constructor(private dataService: DataService) {}

  // ✅ Лаб5: у ngOnInit тягнемо дані з сервісу
  ngOnInit(): void {
    this.items = this.dataService.getItems();
  }

  // ✅ Лаб4: фільтрація працює як і раніше
  get filteredItems(): Item[] {
    const q = this.search.trim().toLowerCase();
    if (!q) return this.items;

    return this.items.filter((it) => {
      const inTitle = it.title.toLowerCase().includes(q);
      const inFeatures = it.features.some((f) => f.toLowerCase().includes(q));
      return inTitle || inFeatures;
    });
  }

  trackById(index: number, it: Item) {
    return it.id;
  }

  // ✅ Лаб4: @Output select -> console.log (лишили)
  onItemSelected(it: Item): void {
    console.log('Обраний елемент:', it);
  }
}
