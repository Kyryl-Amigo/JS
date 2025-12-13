import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Item } from '../../shared/models/item.model';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-details.html',
  styleUrl: './item-details.css',
})
export class ItemDetailsComponent implements OnInit {
  item?: Item;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getItems().subscribe(items => {
      this.item = items.find(i => i.id === id);
    });
  }
}
