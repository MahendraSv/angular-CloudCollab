import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  products = [];

  getProducts() {
    return this.http.get<any[]>('api/products')
    .pipe(
      tap(data => console.log('Products', JSON.stringify(data)))
    );
  }

  getProduct(id: number) {
    let ps = this.getProducts();
    // let found = ps.find(x => x.productId === id);
    let found;
    return found;
  }
}
