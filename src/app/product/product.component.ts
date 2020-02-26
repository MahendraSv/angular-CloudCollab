import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
    this.sub = this.productService.getProducts().subscribe(
      products => this.products = products
    );
  }

  products = [];
  sub: Subscription;

  showImages = false;

  toggleImages() {
    this.showImages = !this.showImages;
  }
}
