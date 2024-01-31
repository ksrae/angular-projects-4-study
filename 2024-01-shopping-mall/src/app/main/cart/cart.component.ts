import { Component, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  router = inject(Router);
  cartList: ProductModel[] = [];

  ngOnInit(): void {
    this.cartList = this.cartService.cartItem;
    console.log(this.cartList);
  }
  buy() {
    this.router.navigate(['/main/purchase']);
  }
}

