import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { Item } from '../../shared/models/item.model';
import { ItemCardComponent } from '../item-card/item-card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsListComponent implements OnInit, OnDestroy {
  // ✅ Лаб4: поле пошуку лишається
  search = '';

  // ✅ Лаб6: тепер items приходять реактивно з сервісу
  items: Item[] = [];

  // ✅ Лаб6: механізм відписки
  private readonly destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // ✅ Лаб6 п.3: підписка на Observable + відписка через takeUntil
    this.dataService
      .getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => {
        this.items = items;
      });

    // ✅ щоб на старті показати все (або якщо в сервісі вже є init — не завадить)
    this.dataService.setSearchQuery(this.search);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackById(index: number, it: Item) {
    return it.id;
  }

  // ✅ Лаб4: подія вибору (лишили як є)
  onItemSelected(it: Item): void {
    console.log('Обраний елемент:', it);
  }

  // ✅ Лаб6 п.5: пошук тепер "шле запит у сервіс"
  onSearchChange(value: string): void {
    this.dataService.setSearchQuery(value);
  }
}
