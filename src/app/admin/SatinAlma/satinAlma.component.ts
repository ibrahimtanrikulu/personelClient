import { Component, OnInit } from '@angular/core';
import { map, timeout } from 'rxjs';
import { Kitaplar } from 'src/app/model/kitaplar.model';
import { Kullanici } from 'src/app/model/kullanici.model';
import { KullaniciService } from 'src/app/model/kullanici.service';
import { KitaplarService } from '../../model/kitaplar.service';

@Component({
  selector: 'app-kiralama',
  templateUrl: './satinAlma.component.html',
  styleUrls: ['./satinAlma.component.scss'],
})
export class SatinAlmaComponent implements OnInit {
  kitapListesi: any[] = [];
  kullaniciListesi: any[] = [];
  sonListe: any[] = [];
  kitap: Kitaplar = new Kitaplar();
  kullanici: Kullanici = new Kullanici();
  DialogStatus: boolean = false;
  constructor(
    private kitaplarService: KitaplarService,
    private kullaniciService: KullaniciService
  ) {
    kitaplarService.findAll().subscribe((s) => (this.kitapListesi = s));
    kullaniciService
      .findAll()
      .pipe(
        map((ma) =>
          ma.map((m) => ({
            kullaniciId: m.id,
            isim: m.isim,
            kiralananKitap: m.kiralananKitap,
            kullanici: m.kullanici,
            sifre: m.sifre,
            soyad: m.soyad,
            tc: m.tc,
            yetki: m.yetki,
          }))
        )
      )
      .subscribe((s) => (this.kullaniciListesi = s));
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.GetDataAll();      
    }, 200);

  }
  GetDataAll() {
    this.sonListe = this.kullaniciListesi.map((t1: any) => ({
      ...t1,
      ...this.kitapListesi.find(
        (t2) => t2.id === t1.kiralananKitap && t2.kiralanmaDurum == true
      ),
    }));
  }
  KiralanmaSilinsinmi(e: any) {
    // kullanicilar
    this.kullanici.id = e.kullaniciId;
    this.kullanici.isim = e.isim;
    this.kullanici.kiralananKitap = 0;
    this.kullanici.kullanici = e.kullanici;
    this.kullanici.sifre = e.sifre;
    this.kullanici.soyad = e.soyad;
    this.kullanici.tc = e.tc;
    this.kullanici.yetki = e.yetki;
    // kitaplar
    this.kitap.aciklama = e.aciklama;
    this.kitap.ad = e.ad;
    this.kitap.id = e.id;
    this.kitap.kategori = e.kategori;
    this.kitap.kiralanmaDurum = false;
    this.kitap.sayfa = e.sayfa;
    this.kitap.tarih = e.tarih;
    this.kitap.yazar = e.yazar;

    this.kullaniciService
      .update(this.kullanici.id!, this.kullanici)
      .subscribe();
    this.kitaplarService.update(this.kitap.id!, this.kitap).subscribe();
  }
  // ArrayFilterContactMethod() {
  // let sonKullaniciListesi: any[] = [];
  // for (let index = 0; index < this.satinAlmaListesi.length; index++) {
  //   sonKullaniciListesi.push(
  //     this.kullaniciListesi.find(
  //       (f: Kullanici) => f.id == this.satinAlmaListesi[index]
  //     )
  //   );
  // }
  // for (let index = 0; index < this.satinAlmaListesi.length; index++) {
  //   sonKitaplarListesi.push(
  //     this.kitapListesi.find(
  //       (f: Kitaplar) => f.id == this.satinAlmaListesi[index]
  //     )
  //   );
  // }
  // sonKullaniciListesi = sonKullaniciListesi.map((x: Kullanici) => ({
  //   id: x.id,
  //   kullanici: x.kullanici,
  //   isim: x.isim,
  //   soyad: x.soyad,
  //   tc: x.tc,
  // }));
  // sonKitaplarListesi = sonKitaplarListesi.map((x: Kitaplar) => ({
  //   id: x.id,
  //   kitapAdi: x.ad,
  //   yazarAdi: x.yazar,
  // }));
  // this.sonListe.push([...sonKullaniciListesi, ...sonKitaplarListesi]);
  // console.log(this.sonListe);
  // console.log(sonKullaniciListesi);
  // console.log(sonKitaplarListesi);

  // let deger:any[] = [];
  // let a = [];
  // for (let index = 0; index < this.kullaniciListesi.length; index++) {
  //   const element = this.kullaniciListesi[index].kiralananKitap;
  //   deger = this.kitapListesi.filter((f: Kitaplar) => f.id == element);
  //   if (deger.length != 0) {
  //     a.push(deger);
  //   }
  // }
  // console.log(a);
  // }

  // tikla() {
  // var d = this.kategoriListe.filter((x) => x.id! > 1);
  // var d = this.kategoriListe.find((x) => x.id == 1);
  // var d = this.kategoriListe.map((x: Kategori) => x.id! * 2);

  // this.kategorilerService.findAll().subscribe((x) => {
  //   this.filterKategoriListesi = x.map((c) => ({
  //     id: c.id,
  //     name: c.name,
  //     aciklama: c.aciklama,
  //   }));
  // });

  // this.kategorilerService
  //   .findAll()
  //   .pipe(map((c) => c.filter((f) => f.id == 1)))
  //   .subscribe((x) => (this.filterKategoriListesi = x));

  // this.kategorilerService
  //   .findAll()
  //   .pipe(
  //     map((y) =>
  //       y.map((x) => ({
  //         id: x.id,
  //         name: x.name,
  //         aciklama: x.aciklama,
  //       }))
  //     )
  //   )
  //   .subscribe((s) => console.log(s));

  // this.kategorilerService
  //   .findAll()
  //   .pipe(
  //     map((x) =>
  //       x.map((m) => ({
  //         id: m.id! + 1,
  //         name: m.name,
  //         aciklama: m.aciklama,
  //       }))
  //     )
  //   )
  //   .subscribe((s) => console.log(s));
  // }
}
