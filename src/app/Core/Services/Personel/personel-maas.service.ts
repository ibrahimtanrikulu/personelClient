import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from '../httpgeneric.service';
import { PersonelMaasHesaplaModel } from '../../model/Personel/personelMaasHesaplaModel';

@Injectable({
  providedIn: 'root',
})
export class PersonelMaasService {
  constructor(private httpClientService: GenericService) {}

  getList(e: string): Observable<PersonelMaasHesaplaModel[]> {
    return this.httpClientService.get<PersonelMaasHesaplaModel[]>(
      {
        controller: 'personelmaas',
        action: 'get',
      },
      e
    );
  }

  updateListPersonel(item: PersonelMaasHesaplaModel[]) {
    return this.httpClientService.put(
      {
        controller: 'personelmaas',
        action: 'putlist',
      },
      item
    );
  }
}
