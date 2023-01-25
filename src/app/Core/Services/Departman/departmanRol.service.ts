import { Injectable } from '@angular/core';
import { GenericService } from '../httpgeneric.service';
import { DepartmanRol } from '../../Interface/Departman/departmanRol';
import { Observable } from 'rxjs';

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
    return this.httpClientService.post(
      {
        controller: 'departmanrol',
        action: 'post',
      },
      item
    );
  }

  remove(item: string) {
    return this.httpClientService.delete(
      {
        controller: 'departmanrol',
        action: 'delete',
      },
      item
    );
  }

  update(item: DepartmanRol) {
    return this.httpClientService.put(
      {
        controller: 'departmanrol',
        action: 'put',
      },
      item
    );
  }
}
