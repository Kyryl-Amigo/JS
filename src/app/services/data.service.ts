import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Item } from '../shared/models/item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // ✅ Базові дані (як у Лаб5, просто перенесені тут)
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

  // ✅ Лаб6: BehaviorSubject з поточним станом списку
  private readonly itemsSubject = new BehaviorSubject<Item[]>([]);

  // ✅ Лаб6: Subject для пошуку (поле пошуку "шле запит у сервіс")
  private readonly searchSubject = new Subject<string>();

  constructor() {
    // ✅ Лаб6 п.2: getItems повертає Observable<Item[]> через of()
    // І одразу ініціалізуємо itemsSubject початковими даними
    of(this.allItems).subscribe((items) => this.itemsSubject.next(items));

    // ✅ Лаб6 п.4-5: реактивний пошук через Subject + оператори RxJS
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

  // ✅ Лаб6 п.2: тепер метод повертає Observable<Item[]>
  // (і саме він має використовувати of() — ми це зробили вище + тут повертаємо stream)
  getItems(): Observable<Item[]> {
    return this.itemsSubject.asObservable();
  }

  // ✅ Лаб6 п.5: пошукове поле відправляє запит у сервіс
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
