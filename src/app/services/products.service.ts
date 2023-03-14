import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product,ProductDetailDTO } from '../modals/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private URL = 'https://fakestoreapi.com';

  constructor(
    private http: HttpClient
  ) { }
  ngOnInit(): void {

  }
  getALLProducts(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.URL}/products`,{
      params: {
        limit: limit,
        offset: offset
      }
    });
  }
  getProducts() {
    return this.http.get<Product[]>(`${this.URL}/products`, { params: { limit: '10' }});
  }
  getProduct(id: number | null | string) {
    return this.http.get<Product>(`${this.URL}/products/${id}`);
  }
  create(product: ProductDetailDTO) {
    return this.http.post(`${this.URL}/products`, product);
  }
  getByCategory(categoryId: string, limit: number, offset: number) {
    console.log(`${this.URL}/products/${categoryId}/`, { params: { limit: limit, offset: offset }});

    return this.http.get<Product[]>(`${this.URL}/products/category/${categoryId}/`, { params: { limit: limit, offset: offset }});
  }
  getMoreProductsByCategory(categoryId: string, limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.URL}/products/category/${categoryId}`, { params: { limit: limit, offset: offset }});
  }

}
