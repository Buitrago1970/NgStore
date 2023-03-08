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
    title: '',
    price: 0,
    description: '',
    category: '',
    images: ['']
   }
   @Output() addedProduct= new EventEmitter<Product>();
   @Output() showProduct= new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addedProduct.emit(this.product);
  }
  seeProductDetails() {
    this.showProduct.emit(this.product.id);
  }

}
