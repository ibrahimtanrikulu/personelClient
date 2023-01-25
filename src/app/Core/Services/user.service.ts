import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Interface/User/login';
import { User } from '../Interface/User/user';
import { GenericService } from './httpgeneric.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  sonucDeger?: boolean;
  constructor(private httpClientService: GenericService) {}

  CreateUser(item: User) {
    this.httpClientService
      .post(
        {
          controller: 'User',
          action: 'post',
        },
        item
      )
      .subscribe();
  }

  Login(item: Login): Observable<Login> {
    return this.httpClientService.post(
      {
        controller: 'User',
        action: 'login',
      },
      item
    );
  }
}
