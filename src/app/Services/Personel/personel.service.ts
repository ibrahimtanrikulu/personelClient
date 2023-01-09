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
    this.httpClientService
      .put(
        {
          controller: 'personel',
          action: 'put',
        },
        item
      )
      .subscribe();
  }

  savePersonel(item: any) {
    this.httpClientService
      .post(
        {
          controller: 'personel',
          action: 'post',
        },
        item
      )
      .subscribe((s) => console.log(s));
  }

  savePersonelImage(item: any) {
    console.log(item);

    this.httpClientService
      .post(
        {
          controller: 'personel',
          action: 'PostImage',
        },
        item
      )
      .subscribe((s) => console.log(s));
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
