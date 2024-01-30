import { Component, ChangeDetectionStrategy, ChangeDetectorRef, inject, OnInit } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
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
  cdr = inject(ChangeDetectorRef);

  productList$ = this.productService.products$;

  ngOnInit(): void {

  }

  select(product: ProductModel) {
    this.router.navigate([`/main/product/${product.id}`]);
  }
}
