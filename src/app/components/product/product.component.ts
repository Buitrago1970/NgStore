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
    category: '',
    image: '',
    description: ''
   }
   @Output() addedProduct= new EventEmitter<Product>();


  constructor() { }

  ngOnInit(): void {
console.log(this.product);

  }

  addToCart() {
    this.addedProduct.emit(this.product);
  }

}
