import { inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log('authGuard');

  const router = inject(Router);
  const activateRoute = inject(ActivatedRoute);

  //
  // router.navigate(['./login'], {relativeTo: activateRoute.root});

  return true;
}



export const profileResolve: ResolveFn<{id:number}> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return {
    id: 0
  }
}
