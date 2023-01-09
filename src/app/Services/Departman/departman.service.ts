import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Departman } from '../../Interface/Departman/departman';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmanService {
  public errorMesage: any[] = [];
  constructor(private httpClientService: GenericService) {}

  read(): Observable<Departman[]> {
    return this.httpClientService.get<Departman[]>({
      controller: 'departman',
      action: 'get',
    });
  }

  save(item: Departman) {
    this.errorMesage = [];
    this.httpClientService
      .post(
        {
          controller: 'departman',
          action: 'post',
        },
        item
      )
      .subscribe();
    // .subscribe(
    //   (s) => console.log(s, 'değer'),
    //   (errorResponse: HttpErrorResponse) => {
    //     errorResponse.error.errors.isim.forEach((e: any) => {
    //       this.errorMesage.push(e);
    //     });
    //   }
    // );
  }

  remove(item: string) {
    this.httpClientService
      .delete(
        {
          controller: 'departman',
          action: 'delete',
        },
        item
      )
      .subscribe((s) => console.log(s));
  }

  update(item: Departman) {
    this.errorMesage = [];
    this.httpClientService
      .put(
        {
          controller: 'departman',
          action: 'put',
        },
        item
      )
      .subscribe(
        (s) => console.log(s, 'değer'),
        (errorResponse: HttpErrorResponse) => {
          errorResponse.error.errors.isim.forEach((e: any) => {
            this.errorMesage.push(e);
          });
        }
      );
  }
}
