import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  cartService = inject(CartService);

  product: ProductModel = this.activatedRoute.snapshot.data['data']['product'];

  addToCart() {

  }

  buy() {

  }
}
