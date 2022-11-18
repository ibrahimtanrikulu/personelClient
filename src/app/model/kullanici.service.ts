import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Kullanici } from './kullanici.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KullaniciService extends GenericService<Kullanici, number> {
  constructor(protected override _http: HttpClient) {
    super(_http, 'kullanici');
  }
}
