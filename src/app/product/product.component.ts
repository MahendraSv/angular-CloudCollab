import { Component, OnInit } from '@angular/core';

import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  products = [];

  showImages = false;

  toggleImages() {
    this.showImages = !this.showImages;
  }
}
