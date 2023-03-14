import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../modals/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  productId: number = 0;
  product: Product = {
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
  };

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private store: StoreService,

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      console.log(this.productId);

      this.productsService.getProduct(this.productId).subscribe(product => {
        this.product = product;
        console.log(this.product);

      })
    })
  }
  addToCart(product: Product) {
    this.store.addToCart(product);
  }

}
