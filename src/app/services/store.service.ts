import { Injectable } from '@angular/core';
import { Product } from '../modals/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  shoppingCart: Product[] = [];

  constructor() { }

  getCart() {
    return this.shoppingCart;
  }
  addToCart(product: Product) {
    this.shoppingCart.push(product);
  }
  getTotal() {
    return this.shoppingCart.reduce((total, product) => total + product.price, 0);
  }

}
