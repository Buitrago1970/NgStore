import { Component } from '@angular/core';
import { Product } from '../../modals/product.model';
import { StoreService } from '../../services/store.service';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  cart : Product[] = [];
  total : number = 0;
  products: Product[] = []

  constructor(
    private store: StoreService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe( data => {
      this.products = data;
    })}

  addToCart(product: Product) {
    this.store.addToCart(product);
    this.cart = this.store.getCart();
    this.total = this.store.getTotal();
  }
}
