// src/app/components/items-list/items-list.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Laptop } from '../../shared/models/laptop.model';

@Component({
  selector: 'app-items-list',           // <-- цей селектор ми використовуємо в app.html
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.scss'],
})
export class ItemsListComponent {
  laptops: Laptop[] = [
    {
      id: 1,
      brand: 'Apple',
      model: 'MacBook Air 13',
      cpu: 'Apple M2',
      ramGb: 8,
      ssdGb: 256,
      price: 38000,
      inStock: true,
    },
    {
      id: 2,
      brand: 'Asus',
      model: 'ROG Strix G15',
      cpu: 'AMD Ryzen 7',
      ramGb: 16,
      ssdGb: 512,
      price: 52000,
      inStock: false,
    },
    {
      id: 3,
      brand: 'Lenovo',
      model: 'IdeaPad 3',
      cpu: 'Intel Core i5',
      ramGb: 16,
      ssdGb: 512,
      price: 30000,
      inStock: true,
    },
  ];
}
