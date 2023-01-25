import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departman } from '../../Interface/Departman/departman';
import { GenericService } from '../httpgeneric.service';

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
    return this.httpClientService.post(
      {
        controller: 'departman',
        action: 'post',
      },
      item
    );
  }

  remove(item: string) {
    return this.httpClientService.delete(
      {
        controller: 'departman',
        action: 'delete',
      },
      item
    );
  }

  update(item: Departman) {
    return this.httpClientService.put(
      {
        controller: 'departman',
        action: 'put',
      },
      item
    );
  }
}
