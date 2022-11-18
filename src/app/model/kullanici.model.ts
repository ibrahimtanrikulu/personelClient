export class Kullanici {
  constructor(
    public id?: number,
    public kullanici?: string,
    public sifre?: string,
    public isim?: string,
    public soyad?: string,
    public tc?: string,
    public yetki?: boolean,
    public kiralananKitap?: number
  ) {}
}
