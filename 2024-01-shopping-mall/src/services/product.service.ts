import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { BehaviorSubject, Observable, first, map, tap, timer } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService {
  http = inject(HttpClient);
  products$!: Observable<ProductModel[]>;

  getProducts() {
    this.products$ = this.http.get<ProductModel[]>('/assets/db.json');
  }

  getProduct(id: number): Observable<ProductModel | undefined> {
    return this.products$.pipe(
      first(),
      map(products => {
        return products.find(product => Number(product.id) === Number(id));
      })
    );
  }

  buy(productList: ProductModel[]) {
    this.products$ = this.products$.pipe(
      first(),
      map(products => {
        return products.map(product => {
          const exist = productList.find(item => item.id === product.id);
          if(exist) {

            return {
              ...product,
              quantity: product.quantity - exist.quantity,
            }
          }

          return product;
        })
      })
    );
  }
}
