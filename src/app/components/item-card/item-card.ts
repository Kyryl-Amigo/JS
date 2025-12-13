import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCardComponent {
  @Input() item!: Item;

  @Output() select = new EventEmitter<Item>();

  get imageUrl(): string {
    return `/assets/laptops/${this.item?.image ?? ''}`;
  }

  onDetailsClick(): void {
    this.select.emit(this.item);
  }
}
