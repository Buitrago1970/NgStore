export interface Category{
  id: number;
  name: string;
  typeImg: string;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
}
export interface ProductDetailDTO extends Omit<Product, 'id' | 'category'>{
  categoryId: number;
}
