import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})

export class ProductInfoComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: prod => { this.product = prod, console.log('Product', prod) },
      error: err => console.log('App Error', err)
      
    })
  }

}
