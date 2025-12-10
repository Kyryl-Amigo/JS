import { Injectable } from '@angular/core';
import { Item } from '../shared/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: Item[] = [
    {
      id: 1,
      title: 'Apple MacBook Air 13',
      price: 38000,
      inStock: true,
      image: 'https://via.placeholder.com/400x250?text=MacBook+Air',
      features: ['Ультрабук', 'Легкий', 'Для навчання'],
    },
    {
      id: 2,
      title: 'Asus ROG Strix',
      price: 52000,
      inStock: false,
      image: 'https://via.placeholder.com/400x250?text=ROG+Strix',
      features: ['Ігровий', 'Потужний', 'RGB-підсвітка'],
    },
    {
      id: 3,
      title: 'Lenovo IdeaPad 3',
      price: 30000,
      inStock: true,
      image: 'https://via.placeholder.com/400x250?text=IdeaPad+3',
      features: ['Універсальний', 'Офіс', 'Для дому'],
    },
  ];

  getItems(): Item[] {
    return this.items;
  }
}
