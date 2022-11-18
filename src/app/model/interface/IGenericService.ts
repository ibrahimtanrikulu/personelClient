import { Observable } from "rxjs";

export interface IRestService<T, KOD> {
    save(t: T): Observable<T>;

    update(id: KOD, t: T): Observable<T>;

    findOne(id: KOD): Observable<T>;

    findAll(): Observable<T[]>;

    delete(id: KOD): Observable<any>;
}