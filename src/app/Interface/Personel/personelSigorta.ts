import { BaseEntity } from '../BaseEntity';

export interface PersonelSigorta extends BaseEntity {
  SigortaStatu?: string;
  sicilNo?: string;
  meslekKodu?: string;
  girisTarihi?: Date;
  cikisTarihi?: Date;
  cikisNedeni?: string;
  netUcret?: number;
  brutUcret?: number;
  calismaTipi?: string;
  calisanTipi?: string;
  sigortaPrimiIsverenIndirim?: boolean;
  ciktimi?: boolean;
}
