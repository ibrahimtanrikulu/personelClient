import { BaseEntity } from '../BaseEntity';

export interface PersonelBanka extends BaseEntity {
  bankaAdi?: string;
  iban?: string;
  hesapNo?: string;
}
