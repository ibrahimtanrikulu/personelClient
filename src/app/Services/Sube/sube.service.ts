import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Departman } from '../../Interface/Departman/departman';
import { Sube } from '../../Interface/Sube/sube';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root',
})
export class SubeService {
  public errorMesage: any[] = [];
  constructor(private httpClientService: GenericService) {}

  read(): Observable<Sube[]> {
    return this.httpClientService.get<Sube[]>({
      controller: 'sube',
      action: 'get',
    });
  }

  save(item: Sube) {
    this.errorMesage = [];
    this.httpClientService
      .post(
        {
          controller: 'sube',
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
          controller: 'sube',
          action: 'delete',
        },
        item
      )
      .subscribe();
  }

  update(item: Sube) {
    this.errorMesage = [];
    this.httpClientService
      .put(
        {
          controller: 'sube',
          action: 'put',
        },
        item
      )
      .subscribe();
  }
}
