import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product, ProductDetailDTO } from '../../modals/product.model';
import { StoreService } from '../../services/store.service';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  @Input() products: Product[] = [];
  @Output() LoadMore = new EventEmitter();
  @Input() set productID(id: null | string | number) {
   if (id !== null) {
     this.showProductDetails(id);
   }
  }


  cart : Product[] = [];
  total : number = 0;
  showProductDetail: boolean = false;
  productDetail: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    images: ['']
  }
  newProduct: ProductDetailDTO = {
    title: 'ewrewrew',
    price: 12,
    description: 'wewqeqwewqeqweqw',
    categoryId: 3,
    images: ['']
  }

  constructor(
    private store: StoreService,
    private productsService: ProductsService
  ) { }

  addToCart(product: Product) {
    this.store.addToCart(product);
    this.cart = this.store.getCart();
    this.total = this.store.getTotal();
  }
  toggleProductDetail() {
    console.log('working');

    this.showProductDetail = !this.showProductDetail;
  }
  showProductDetails(id: number | null | string) {

    this.productsService.getProduct(id).subscribe( data => {
      this.productDetail = data;
    })
    this.toggleProductDetail();
  }
  addNewProduct() {
    this.productsService.create(this.newProduct).subscribe( data => {
    })
  }
  onLoadMore() {
    this.LoadMore.emit();
  }

}
