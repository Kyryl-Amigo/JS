import { Component, Input } from '@angular/core';
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
  @Input() item!: Item;

  // щоб НЕ повторювати '/assets/laptops/' у html і було чисто
  get imageUrl(): string {
    return `/assets/laptops/${this.item?.image ?? ''}`;
  }
}
