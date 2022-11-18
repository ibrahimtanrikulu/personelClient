import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kitaplar } from './kitaplar.model';
import { GenericService } from './generic.service';

@Injectable()
export class KitaplarService extends GenericService<Kitaplar, number> {
  constructor(protected override _http: HttpClient) {
    super(_http, 'kitaplar');
  }
}
