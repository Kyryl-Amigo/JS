import { Injectable } from '@angular/core';
import { Item } from '../shared/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // ✅ Лаб5: mock-дані тепер тут (а не в items-list)
  private readonly items: Item[] = [
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

  // ✅ Лаб5: метод, який повертає дані
  getItems(): Item[] {
    return this.items;
  }
}
