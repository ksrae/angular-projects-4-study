import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts();
  }
}
