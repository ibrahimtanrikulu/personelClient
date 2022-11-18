import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private accountService: AccountService) {}

  canActivate() {
    return this.accountService.isLoggedIn();
  }
}
