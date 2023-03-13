import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private URL = 'https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient
  ) { }
  getCategories(){
    return this.http.get(`${this.URL}/categories`);
  }

}
