import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductComponent } from './products/product/product.component';
import { authGuard, profileResolve } from './header/profile/auth.guard';


export const mainRoutes: Routes = [
  {path: '', component: MainComponent, children: [
    {path: 'product/:id', component: ProductComponent},
    {path: 'profile',
      canActivate: [authGuard],
      resolve: {data: profileResolve}, // 무조건 json 형태로 감싸져야 값이 전달된다.
      loadChildren: () => import('./header/profile/profile.routes').then(m => m.profileRoutes)
    },
  ]},
];
