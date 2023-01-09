import { BaseEntity } from '../BaseEntity';
import { Personel } from '../../model/Personel/personel';

export interface PersonelDeneyim extends BaseEntity {
  personelId: number;
  sirketIsmi: string;
  yil: number;
  pozisyon: string;
}
