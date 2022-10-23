import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  filter,
  of,
  Observable,
  Subscription,
  from,
  toArray,
  tap,
  map,
} from 'rxjs';
import { ClientService } from '../client.service';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  filterer: string = '';
  catalog: Product[] = [];
  subscription: Subscription;
  constructor(public clientService: ClientService) {
    this.subscription = this.getCatalog();
  }

  ngOnInit(): void {}

  getCatalog(): Subscription {
    return this.clientService.getCatalogue().subscribe((products) => {
      this.catalog = products;
    });
  }
  updateProducts(products: Product[]) {
    this.catalog = products;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
