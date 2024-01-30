import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { ProductModel } from "../models/product.model";
import { BehaviorSubject, Observable, first, map, timer } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService {
  http = inject(HttpClient);
  products!: BehaviorSubject<ProductModel[]>;

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('/assets/db.json');
  }

  getProduct(id: number): Observable<ProductModel | undefined> {
    return this.getProducts().pipe(
      first(),
      map(products => {
        return products.find(product => Number(product.id) === Number(id));
      })
    );
  }
}
