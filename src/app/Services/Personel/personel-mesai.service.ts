import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonelMaasHesaplaModel } from 'src/app/model/Personel/personelMaasHesaplaModel';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root',
})
export class PersonelMesaiService {
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
