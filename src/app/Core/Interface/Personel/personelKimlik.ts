import { BaseEntity } from '../BaseEntity';

export interface PersonelKimlik extends BaseEntity {
  tc?: string;
  isim?: string;
  soyad?: string;
  uyruk?: string;
  dogumTarihi?: Date;
  dogumYeri?: string;
  cinsiyet?: string;
  kanGrubu?: string;
  medeniHal?: string;
  cocukSayisi?: number;
  seriNo?: string;
}
