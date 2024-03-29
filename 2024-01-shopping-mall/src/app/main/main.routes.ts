import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductComponent } from './products/product/product.component';
import { profileGuard } from '../../guards/profile.guard';
import { CartComponent } from './cart/cart.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ProductsComponent } from './products/products.component';
import { productGuard, productResolve } from '../../guards/product.guard';


export const mainRoutes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ProductsComponent},
    {path: 'product/:id',
      canActivate: [productGuard],
      resolve: {data: productResolve},
      component: ProductComponent
    },
    {path: 'profile',
      canActivate: [profileGuard],
      // resolve: {data: profileResolve}, // 무조건 json 형태로 감싸져야 값이 전달된다.
      loadChildren: () => import('./header/profile/profile.routes').then(m => m.profileRoutes)
    },
    {path: 'cart', component: CartComponent },
    {path: 'purchase', component: PurchaseComponent },
    {path: 'purchase/:id', component: PurchaseComponent }
  ]},
];
