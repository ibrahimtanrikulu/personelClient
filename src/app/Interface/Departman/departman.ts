import { BaseEntity } from '../BaseEntity';

export interface Departman extends BaseEntity {
  isim?: string;
  subeId?: number;
  subeAdi?: string;
}
