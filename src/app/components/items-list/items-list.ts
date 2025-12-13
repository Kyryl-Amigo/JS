import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../shared/models/item.model';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsListComponent {
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

  trackById(index: number, it: Item) {
    return it.id;
  }
}
