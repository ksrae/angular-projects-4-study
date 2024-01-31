import { Injectable, inject } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ProductService } from './product.service';

@Injectable({providedIn: 'root'})
export class CartService {
  productService = inject(ProductService);
  cartItem: ProductModel[] = [];

  constructor() {

  }

  add(item: ProductModel) {
    const isExist = this.cartItem.some(cart => cart.id === item.id);

    if(isExist) {
      this.cartItem = this.cartItem.map(cart => {
        if(cart.id === item.id) {
          return {
            ...cart,
            quantity: cart.quantity + 1
          }
        }
        return cart;
      })
    } else {
      this.cartItem.push({
        ...item,
        quantity: 1
      });
    }
    console.log(this.cartItem);
  }

  remove(itemId: number) {
    this.cartItem = this.cartItem.map(cart => {
      if(cart.id === itemId) {
        return {
          ...cart,
          quantity: cart.quantity - 1
        }
      }
      return cart;
    });
  }
}
