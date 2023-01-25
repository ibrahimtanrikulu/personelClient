import { BaseEntity } from "../../Interface/BaseEntity";
import { PersonelKimlik } from "../../Interface/Personel/personelKimlik";
import { PersonelIzin } from "../../Interface/Personel/personelizin";


export interface PersonelIzinModel extends BaseEntity {
  personelKimlik?: PersonelKimlik;
  personelizin?: PersonelIzin[];
}
