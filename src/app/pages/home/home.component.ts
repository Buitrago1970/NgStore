import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  productId: string | number | null = null;


  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.productsService.getALLProducts(this.limit, this.offset).subscribe( data => {
      this.products = data;
    })

    this.route.queryParamMap.subscribe( params => {
      this.productId = params.get('product');
      console.log(this.productId);
    })
  }
  onLoadMore() {
    this.productsService.getALLProducts(this.limit, this.offset).subscribe( data => {
      this.products.push(...data);
      this.offset += this.limit;
    })
  }
}
