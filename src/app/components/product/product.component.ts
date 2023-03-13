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
    image: '',
    rating: {
      count: 0,
      rate: 0
    }
   }
   @Output() addedProduct= new EventEmitter<Product>();
   @Output() showProduct= new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

  addToCart(event: any) {

    event.stopPropagation();
    this.addedProduct.emit(this.product);
  }
  seeProductDetails(event: any) {
    event.stopPropagation();
    this.showProduct.emit(this.product.id);
  }

}
