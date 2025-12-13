import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Item } from '../shared/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly allItems: Item[] = [
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

  private readonly itemsSubject = new BehaviorSubject<Item[]>([]);
  private readonly searchSubject = new Subject<string>();

  constructor() {
    of(this.allItems).subscribe((items) => this.itemsSubject.next(items));

    this.searchSubject
      .pipe(
        debounceTime(250),
        distinctUntilChanged(),
        map((q) => q.trim().toLowerCase()),
        map((q) => this.filterItems(q)),
        tap((filtered) => this.itemsSubject.next(filtered))
      )
      .subscribe();
  }

  getItems(): Observable<Item[]> {
    return this.itemsSubject.asObservable();
  }

  setSearchQuery(query: string): void {
    this.searchSubject.next(query);
  }

  private filterItems(q: string): Item[] {
    if (!q) return this.allItems;

    return this.allItems.filter((it) => {
      const inTitle = it.title.toLowerCase().includes(q);
      const inFeatures = it.features.some((f) => f.toLowerCase().includes(q));
      return inTitle || inFeatures;
    });
  }
}
