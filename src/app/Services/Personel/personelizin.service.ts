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
    this.httpClientService
      .delete(
        {
          controller: 'personelizin',
          action: 'delete',
        },
        e.id
      )
      .subscribe();
  }

  save(item: PersonelIzin) {
    this.httpClientService
      .post(
        {
          controller: 'personelizin',
          action: 'post',
        },
        item
      )
      .subscribe((s) => console.log(s));
  }

  update(item: PersonelIzin) {
    this.httpClientService
      .put(
        {
          controller: 'personelizin',
          action: 'put',
          
        },
        item
      )
      .subscribe((s) => console.log(s));
  }

  saveList(item: PersonelIzin[]) {
    this.httpClientService
      .post(
        {
          controller: 'personelizin',
          action: 'postlist',
        },
        item
      )
      .subscribe();
  }
}
