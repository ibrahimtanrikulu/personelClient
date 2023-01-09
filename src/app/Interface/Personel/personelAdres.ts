import { BaseEntity } from '../BaseEntity';

export interface PersonelAdres extends BaseEntity {
  ulke?: string;
  il?: string;
  ilce?: string;
  postaKodu?: number;
  mahalle?: string;
  sokak?: string;
  acikAdres?: string;
}
