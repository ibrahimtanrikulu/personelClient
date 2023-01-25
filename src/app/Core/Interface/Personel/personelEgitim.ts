import { BaseEntity } from '../BaseEntity';

export interface PersonelEgitim extends BaseEntity {
  egitimDurumu?: string;
  doktora?: string;
  yuksekLisans?: string;
  unuversite?: string;
  bolum?: string;
  notOrtalamasi?: string;
  lisansDerecesi?: string;
  lise?: string;
  ortaOkul?: string;
  ilkOkul?: string;
}
