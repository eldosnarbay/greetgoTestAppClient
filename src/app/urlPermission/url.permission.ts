import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class UrlPermission implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('sss');
    if (localStorage.getItem('currentUser')) {
      return true;
    }

    console.log('aaa');
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
