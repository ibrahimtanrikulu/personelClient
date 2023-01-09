import { BaseEntity } from 'src/app/Interface/BaseEntity';
import { PersonelIzin } from 'src/app/Interface/Personel/personelizin';
import { PersonelKimlik } from 'src/app/Interface/Personel/personelKimlik';

export interface PersonelIzinModel extends BaseEntity {
  personelKimlik?: PersonelKimlik;
  personelizin?: PersonelIzin[];
}
