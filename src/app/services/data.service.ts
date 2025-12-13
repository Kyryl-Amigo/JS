import { Injectable } from '@angular/core';
import { Item } from '../shared/models/item.model';   // ← ЗВЕРНИ УВАГУ: ../

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: Item[] = [ /* ... */ ];
}
