import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  _search: string = ''

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.listAll().subscribe({
      next: data => this.products=data,
      error: err => console.log('Error', err) 
    });
  }

    set search(value: string) {
      this._search=value;
    }

    pesquisarProduto(): void {
      this.productService.search(this._search).subscribe({
        next: data => this.products=data,
        error: err => console.log('Error', err) 
      });
    }

}
