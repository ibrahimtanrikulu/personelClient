import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SatinAlma } from './SatinAlma.mode';
import { GenericService } from './generic.service';

@Injectable()
export class SatinAlmaService extends GenericService<SatinAlma, number> {
    constructor(protected override _http: HttpClient) {
        super(_http, "kiralama");
    }
}
