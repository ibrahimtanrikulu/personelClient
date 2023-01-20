import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonelIzin } from 'src/app/Interface/Personel/personelizin';
import { PersonelIzinModel } from 'src/app/model/Personel/personelizinModel';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root',
})
export class PersonelizinService {
  constructor(private httpClientService: GenericService) {}

  getList(): Observable<PersonelIzinModel[]> {
    return this.httpClientService.get<PersonelIzinModel[]>({
      controller: 'personelizin',
      action: 'get',
    });
  }

  remove(e: PersonelIzin) {
    return this.httpClientService.delete(
      {
        controller: 'personelizin',
        action: 'delete',
      },
      e.id
    );
  }

  save(item: PersonelIzin) {
    return this.httpClientService.post(
      {
        controller: 'personelizin',
        action: 'post',
      },
      item
    );
  }

  update(item: PersonelIzin) {
    return this.httpClientService.put(
      {
        controller: 'personelizin',
        action: 'put',
      },
      item
    );
  }

  saveList(item: PersonelIzin[]) {
    return this.httpClientService.post(
      {
        controller: 'personelizin',
        action: 'postlist',
      },
      item
    );
  }
}
