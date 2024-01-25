import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  productService = inject(ProductService);
  router = inject(Router);

  productList$ = this.productService.getProducts();

  ngOnInit(): void {

  }

  select(product: ProductModel) {
    this.router.navigate([`/main/product/${product.id}`]);
  }
}
