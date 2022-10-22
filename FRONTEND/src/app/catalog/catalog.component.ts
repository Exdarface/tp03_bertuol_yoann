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
  public catalogObservable$: Observable<any>;
  filteredCatalog: Product[] = [];
  subscription: Subscription;
  constructor(public clientService: ClientService) {
    this.catalogObservable$ = this.clientService.getCatalogue().pipe(
      map((products) => {
        return products.filter((product) =>
          product.name.toLowerCase().includes(this.filterer.toLowerCase())
        );
      })
    );
    this.subscription = this.subscribe();
  }

  ngOnInit(): void {}

  subscribe(): Subscription {
    return this.catalogObservable$.subscribe((products) => {
      this.filteredCatalog = products;
    });
  }
  updateProducts(): void {
    this.subscription.unsubscribe();
    this.subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
