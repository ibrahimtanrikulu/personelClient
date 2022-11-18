import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token == "true") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
