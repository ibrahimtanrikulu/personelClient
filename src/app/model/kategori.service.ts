import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kategori } from './kategori.model';
import { GenericService } from './generic.service';

@Injectable()
export class KategoriService extends GenericService<Kategori, number> {
    constructor(protected override _http: HttpClient) {
        super(_http, "kategori");
    }
}
