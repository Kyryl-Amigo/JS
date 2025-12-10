import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css'],
})
export class ItemCardComponent {
  @Input() item!: Item;
}
