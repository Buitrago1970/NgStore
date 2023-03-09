import { Component } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import { Product } from '../../modals/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = []
  limit: number = 10;
  offset: number = 0;


  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.productsService.getALLProducts(this.limit, this.offset).subscribe( data => {
      this.products = data;
    })
  }
  onLoadMore() {
    this.productsService.getALLProducts(this.limit, this.offset).subscribe( data => {
      this.products.push(...data);
      this.offset += this.limit;
    })
  }
}
