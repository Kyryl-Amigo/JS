import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Потрібно для пайпів (currency, uppercase)
import { Laptop } from '../../shared/models/laptop.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html', // Ваша назва файлу
  styleUrl: './item-card.scss'     // Ваша назва файлу
})
export class ItemCardComponent { // Перевірте, можливо у вас просто class ItemCard
  @Input() laptop!: Laptop; // Очікуємо об'єкт Laptop ззовні
}