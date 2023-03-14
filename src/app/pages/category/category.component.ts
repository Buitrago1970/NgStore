import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../modals/product.model';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  products: Product[] = []

  x : string = '';
  categoryId: string = '';
  limit: number = 10;
  offset: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
      ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.categoryId = params.get('id') || '';
        return this.productsService.getByCategory(this.categoryId, this.limit, this.offset);
      })
    ).subscribe( data => {
      this.products = data;
    })
    }
  onLoadMore() {
    this.productsService.getMoreProductsByCategory(this.categoryId,this.limit, this.offset).subscribe( data => {
      this.products.push(...data);
      this.offset += this.limit;
    })
  }

}
