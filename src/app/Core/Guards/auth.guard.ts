import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token: string = localStorage.getItem('AccessToken') as string;

    let isTokenExpired: any;
    try {
      isTokenExpired = this.jwtHelper.isTokenExpired(token);
    } catch {
      isTokenExpired = true;
    }
    if (!token || isTokenExpired) {
      _isAuth = false;
      this.router.navigate(['/ui'], {
        queryParams: { returnUrl: state.url },
      });
    }
    _isAuth = true;

    return true;
  }
}
export let _isAuth: boolean = false;
