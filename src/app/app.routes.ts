// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list'; 
//     🔺 додали components/ і прибрали .ts

export const routes: Routes = [
  { path: '', component: ItemsListComponent },
];
