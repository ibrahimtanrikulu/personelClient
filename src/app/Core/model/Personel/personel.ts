import { BaseEntity } from "../../Interface/BaseEntity";
import { PersonelAdres } from "../../Interface/Personel/personelAdres";
import { PersonelBanka } from "../../Interface/Personel/personelBanka";
import { PersonelDeneyim } from "../../Interface/Personel/personelDeneyim";
import { PersonelEgitim } from "../../Interface/Personel/personelEgitim";
import { PersonelKimlik } from "../../Interface/Personel/personelKimlik";
import { PersonelSigorta } from "../../Interface/Personel/personelSigorta";
import { PersonelSirket } from "../../Interface/Personel/personelSirket";
import { Personeliletisim } from "../../Interface/Personel/personeliletisim";
import { PersonelIzin } from "../../Interface/Personel/personelizin";


export interface Personel extends BaseEntity {
  personelEgitim?: PersonelEgitim;
  personelAdres?: PersonelAdres;
  personeliletisim?: Personeliletisim;
  personelKimlik?: PersonelKimlik;
  personelSigorta?: PersonelSigorta;
  personelBanka?: PersonelBanka;
  personelSirket?: PersonelSirket;
  personelDeneyim?: PersonelDeneyim[];
  personelizin?: PersonelIzin[];
}
