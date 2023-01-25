import { Departman } from '../Departman/departman';
import { ProjeDetay } from './projeDetay';

export class Proje {
  projeId?: number;
  projeAdi?: string;
  aciklama?: string;

  departmanId?: number[];
  departman?:Departman[];
  projeDetay?: ProjeDetay;
  
  //PersonelId?: number[];
  //ProjeGorevleri?: ProjeGorevleri;
}
