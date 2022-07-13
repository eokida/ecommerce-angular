import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://sheetlabs.com/ZSIS/ecommerce_products';

  products: Observable<Product[]>

  constructor(private http: HttpClient) { }

  listAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  search(value: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?productname=*${value}*`);
  }

  getProduct(id: number): Observable<Product> {
    this.products  = this.http.get<Product[]>(`${this.apiUrl}?id=${id}`);
    return this.products.pipe(map(prods => prods[0]));
  }
}
