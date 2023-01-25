import { BaseEntity } from "../../Interface/BaseEntity";
import { PersonelKimlik } from "../../Interface/Personel/personelKimlik";
import { PersonelSigorta } from "../../Interface/Personel/personelSigorta";


export interface PersonelIstifa extends BaseEntity {
  personelKimlik?: PersonelKimlik;
  personelSigorta?: PersonelSigorta;
}
