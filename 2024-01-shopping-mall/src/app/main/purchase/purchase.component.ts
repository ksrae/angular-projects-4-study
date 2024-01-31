import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ProductModel } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { BehaviorSubject, Observable, Subject, first, tap } from 'rxjs';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    RouterModule
  ],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaseComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  cartService = inject(CartService);
  productService = inject(ProductService);

  purchaseList$ = new BehaviorSubject<ProductModel[]>([]);

  ngOnInit(): void {

    const buyNowProductId = this.activatedRoute.snapshot.params['id'];
    console.log({buyNowProductId});

    if(buyNowProductId) {
      this.productService.getProduct(buyNowProductId).pipe(
        first(),
        tap(product => {
          this.purchaseList$.next([{
            ...product,
            quantity: 1
          }] as ProductModel[]);
        })
      ).subscribe();
    } else {
      console.log('cart list');
      const cartList = this.cartService.cartItem;
      this.purchaseList$.next(cartList);
    }
  }

  buy() {
    this.productService.buy(this.purchaseList$.value);
    this.router.navigate(['/main']);
  }

}
