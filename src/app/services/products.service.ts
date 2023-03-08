import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product,ProductDetailDTO } from '../modals/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }
  getProducts() {
    return this.http.get<Product[]>(this.URL);
  }
  getProduct(id: number) {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }
  create(product: ProductDetailDTO) {
    return this.http.post(this.URL, product);
  }
}
