import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sube } from '../../Interface/Sube/sube';
import { GenericService } from '../httpgeneric.service';

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
    return this.httpClientService.post(
      {
        controller: 'sube',
        action: 'post',
      },
      item
    );
  }

  remove(item: string) {
    return this.httpClientService.delete(
      {
        controller: 'sube',
        action: 'delete',
      },
      item
    );
  }

  update(item: Sube) {
    return this.httpClientService.put(
      {
        controller: 'sube',
        action: 'put',
      },
      item
    );
  }
}
