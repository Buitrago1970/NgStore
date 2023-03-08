import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../modals/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    img: ''
   }
   @Output() addedProduct= new EventEmitter<Product>();


  constructor() { }

  addToCart() {
    this.addedProduct.emit(this.product);
  }

}
