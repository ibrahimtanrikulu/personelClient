import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { DepartmanRol } from 'src/app/Interface/Departman/departmanRol';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root',
})
export class DepartmanRolService {
  public errorMesage: any[] = [];
  constructor(private httpClientService: GenericService) {}

  read(): Observable<DepartmanRol[]> {
    return this.httpClientService.get<DepartmanRol[]>({
      controller: 'departmanrol',
      action: 'get',
    });
  }

  save(item: DepartmanRol) {
    this.errorMesage = [];
    this.httpClientService
      .post(
        {
          controller: 'departmanrol',
          action: 'post',
        },
        item
      )
      .subscribe();
  }

  remove(item: string) {
    this.httpClientService
      .delete(
        {
          controller: 'departmanrol',
          action: 'delete',
        },
        item
      )
      .subscribe((s) => console.log(s));
  }

  update(item: DepartmanRol) {
    this.errorMesage = [];
    this.httpClientService
      .put(
        {
          controller: 'departmanrol',
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
