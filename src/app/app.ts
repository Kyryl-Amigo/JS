// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './components/items-list/items-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ItemsListComponent,   // <- тут ОБОВʼЯЗКОВО має бути цей компонент
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {}
