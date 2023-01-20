import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personel } from 'src/app/model/Personel/personel';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root',
})
export class PersonelService {
  constructor(private httpClientService: GenericService) {}

  getList(): Observable<Personel[]> {
    return this.httpClientService.get<Personel[]>({
      controller: 'personel',
      action: 'get',
    });
  }

  getFilterList(): Observable<Personel[]> {
    return this.httpClientService.get<Personel[]>({
      controller: 'personel',
      action: 'GetFilter',
    });
  }

  updatePersonel(item: Personel) {
    return this.httpClientService.put(
      {
        controller: 'personel',
        action: 'put',
      },
      item
    );
  }

  savePersonel(item: any) {
    return this.httpClientService.post(
      {
        controller: 'personel',
        action: 'post',
      },
      item
    );
  }

  savePersonelImage(item: any) {
    return this.httpClientService.post(
      {
        controller: 'personel',
        action: 'PostImage',
      },
      item
    );
  }

  // async remove(item: string) {
  //   const geriDonusDegeri: Observable<any> = this.httpClientService.delete(
  //     {
  //       controller: 'personel',
  //     },
  //     item
  //   );
  //   await firstValueFrom(geriDonusDegeri);
  // }
}
