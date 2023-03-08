import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../modals/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  shoppingCart: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  getCart() {
    return this.shoppingCart;
  }
  addToCart(product: Product) {
    this.shoppingCart.push(product);
    this.cart.next(this.shoppingCart);
  }
  getTotal() {
    return this.shoppingCart.reduce((total, product) => total + product.price, 0);
  }

}
