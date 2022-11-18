export class Kitaplar {
  constructor(
    public id?: number,
    public yazar?: string,
    public ad?: string,
    public kategori?: string,
    public sayfa?: number,
    public kiralanmaDurum?: boolean,
    public tarih?: number,
    public aciklama?: string
  ) {}
}
