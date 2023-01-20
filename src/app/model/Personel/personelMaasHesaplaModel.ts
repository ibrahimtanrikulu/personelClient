import { BaseEntity } from 'src/app/Interface/BaseEntity';
import { PersonelKimlik } from 'src/app/Interface/Personel/personelKimlik';
import { PersonelSigorta } from 'src/app/Interface/Personel/personelSigorta';

export interface PersonelMaasHesaplaModel extends BaseEntity {
  personelKimlik?: PersonelKimlik;
  personelSigorta?: PersonelSigorta;
}
