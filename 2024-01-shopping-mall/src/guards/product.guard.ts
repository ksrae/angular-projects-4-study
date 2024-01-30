import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { first, map, Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

export const productGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const id = route.params['id'];


  return getProduct(id).pipe(

    map(product => {
      if(product) {
        return true;
      }
      router.navigate(['/main/products']);
      return false;
    })
  )
}

export const productResolve: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id = route.params['id'];

  return getProduct(id).pipe(

    map(product => {
      return {product: product};
    })
  )
}

function getProduct(id: number): Observable<ProductModel | undefined> {
  const productService = inject(ProductService);
    return productService.products$.pipe(

    map(products => {
      return products.find(product => Number(product.id) === Number(id));
    })
  )
  // return productService.getProduct(id);
}
