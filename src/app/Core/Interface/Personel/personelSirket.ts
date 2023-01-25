import { BaseEntity } from '../BaseEntity';

export interface PersonelSirket extends BaseEntity {
  SubeId?: number;
  isTanimi?: string;
  departmanId?: number;
  departmanRoleId?: number;
}
