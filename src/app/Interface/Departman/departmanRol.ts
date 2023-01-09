import { BaseEntity } from '../BaseEntity';

export interface DepartmanRol extends BaseEntity {
  isim?: string;
  departmanId?: number;
  departmanAdi?: string;
  subeAdi?: string;
}
