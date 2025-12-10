import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../shared/models/item.model';
import { ItemCardComponent } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css'],
})
export class ItemsListComponent {
  items: Item[] = [
    {
      id: 1,
      title: 'Apple MacBook Air 13 M2',
      price: 42000,
      inStock: true,
      image: 'https://via.placeholder.com/400x250?text=MacBook+Air+M2',
      features: ['13" Retina', 'M2', '8GB RAM', '256GB SSD'],
    },
    {
      id: 2,
      title: 'Asus ROG Strix G15',
      price: 52000,
      inStock: false,
      image: 'https://via.placeholder.com/400x250?text=ROG+Strix+G15',
      features: ['15.6" 144Hz', 'RTX 3060', '16GB RAM', '512GB SSD'],
    },
    {
      id: 3,
      title: 'Lenovo IdeaPad 3',
      price: 30000,
      inStock: true,
      image: 'https://via.placeholder.com/400x250?text=IdeaPad+3',
      features: ['15.6"', 'Intel i5', '8GB RAM', '512GB SSD'],
    },
    {
      id: 4,
      title: 'HP Pavilion 14',
      price: 33500,
      inStock: true,
      image: 'https://via.placeholder.com/400x250?text=HP+Pavilion+14',
      features: ['14"', 'Ryzen 5', '16GB RAM', '512GB SSD'],
    },
  ];
}
