import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRestService } from './interface/IGenericService';

@Injectable()
export class GenericService<T, KOD> implements IRestService<T, KOD> {
  constructor(
    protected _http: HttpClient,
    @Inject('_base') protected _base: string
  ) {}

  save(t: T): Observable<T> {
    return this._http.post<T>('http://localhost:3000/' + this._base, t);
  }

  update(kod: KOD, t: T): Observable<T> {
    return this._http.put<T>(
      'http://localhost:3000/' + this._base + '/' + kod,
      t,
      {}
    );
  }

  findOne(kod: KOD): Observable<T> {
    return this._http.get<T>('http://localhost:3000/' + this._base + '/' + kod);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>('http://localhost:3000/' + this._base);
  }

  delete(kod: KOD): Observable<T> {
    return this._http.delete<T>(
      'http://localhost:3000/' + this._base + '/' + kod
    );
  }
}
