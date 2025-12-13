import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Item } from '../../shared/models/item.model';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsListComponent {
  // ✅ Лаб4: поле пошуку
  search = '';

  items: Item[] = [
    {
      id: 1,
      title: 'Apple MacBook Air 13',
      price: 38000,
      inStock: true,
      image: 'MacBook-air.jpg',
      features: ['Ультрабук', 'Легкий', 'Для навчання'],
    },
    {
      id: 2,
      title: 'Asus ROG Strix G15',
      price: 52000,
      inStock: false,
      image: 'asus-rog-g15.jpg',
      features: ['Ігровий', 'Потужний', 'RGB-підсвітка'],
    },
    {
      id: 3,
      title: 'Lenovo IdeaPad 3',
      price: 30000,
      inStock: true,
      image: 'lenovo-ideapad3.jpg',
      features: ['Універсальний', 'Офіс', 'Для дому'],
    },
  ];

  // ✅ Лаб4: фільтрація
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

  // ✅ Лаб4: підписка на @Output і лог у консоль
  onItemSelected(it: Item): void {
    console.log('Обраний елемент:', it);
  }
}
