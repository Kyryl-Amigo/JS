import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCardComponent {
  // ✅ Лаб4: офіційний вхідний параметр
  @Input() item!: Item;

  // ✅ Лаб4: подія вибору елемента
  @Output() select = new EventEmitter<Item>();

  get imageUrl(): string {
    return `/assets/laptops/${this.item?.image ?? ''}`;
  }

  onDetailsClick(): void {
    this.select.emit(this.item);
  }
}
