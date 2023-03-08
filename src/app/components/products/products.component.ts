import { Component } from '@angular/core';
import { Product } from '../../modals/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  cart : Product[] = [];
  total : number = 0;
  products: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 300,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 400,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 500,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 6,
      name: 'Producto 6',
      price: 600,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 7,
      name: 'Producto 7',
      price: 700,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 8,
      name: 'Producto 8',
      price: 800,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 9,
      name: 'Producto 9',
      price: 900,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    },
    {
      id: 10,
      name: 'Producto 10',
      price: 1000,
      img: 'https://www.w3schools.com/w3css/img_lights.jpg'
    }
  ]

  constructor(
    private store: StoreService
  ) { }

  addToCart(product: Product) {
    this.store.addToCart(product);
    this.cart = this.store.getCart();
    this.total = this.store.getTotal();
  }
}
