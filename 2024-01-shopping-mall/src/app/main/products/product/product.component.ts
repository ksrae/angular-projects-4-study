import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ProductModel } from '../../../../models/product.model';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    NgIf,
    RouterModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  cartService = inject(CartService);

  product: ProductModel = this.activatedRoute.snapshot.data['data']['product'];

  addToCart() {
    this.cartService.add(this.product);
  }

  buy() {
    this.router.navigate([`/main/purchase/${this.product.id}`]);
  }
}
