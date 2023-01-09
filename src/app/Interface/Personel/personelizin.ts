import { BaseEntity } from '../BaseEntity';

export interface PersonelIzin extends BaseEntity {
  baslangicGun?: Date;
  bitisGun?: Date;
  neden?: string;
  Turu?: string; //üçretli-yıllık izin
  personelId?: number;
}
