import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { map } from 'rxjs';
import { KategoriService } from 'src/app/model/kategori.service';
import { Kitaplar } from 'src/app/model/kitaplar.model';
import { KitaplarService } from 'src/app/model/kitaplar.service';
import { Kullanici } from 'src/app/model/kullanici.model';
import { KullaniciService } from 'src/app/model/kullanici.service';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.scss'],
})
export class AnasayfaComponent implements OnInit {
  kitaplarListesi: any[] = [];
  kategoriListesi: any[] = [];
  navbarItems: MenuItem[] = [];
  kitaplar: Kitaplar = new Kitaplar();
  kullanici: Kullanici = new Kullanici();
  display: boolean = false;
  UyariDisplay: boolean = false;
  constructor(
    private kitaplarService: KitaplarService,
    private kategoriService: KategoriService,
    private kullaniciService: KullaniciService
  ) {}
  ngOnInit(): void {
    this.kitaplarVeriAl();
    this.navbarItems = [
      {
        label: 'Kitap Kiralama',
      },
      {
        disabled: true,
      },
    ];

    setTimeout(() => {
      let id = localStorage.getItem('kullanici');
      this.kullaniciService
        .findOne(<number>(<unknown>id))
        .subscribe((x) => (this.kullanici = x));
    }, 100);
  }
  kaldir() {
    localStorage.clear();
  }
  kitaplarVeriAl() {
    this.kitaplarService
      .findAll()
      .pipe(map((m) => m.filter((f) => f.kiralanmaDurum == false)))
      .subscribe((x) => (this.kitaplarListesi = x));
  }
  KategoriVerileri() {
    this.kategoriService.findAll().subscribe((x) => (this.kategoriListesi = x));
  }

  KiralaMethod(e: any) {
    this.display = true;
    this.kitaplar = e;
  }

  Kirala() {
    if (this.kullanici.kiralananKitap == 0) {
      this.kullanici.kiralananKitap = this.kitaplar.id;
      this.kitaplar.kiralanmaDurum = true;
      this.kullaniciService
        .update(this.kullanici.id!, this.kullanici)
        .subscribe();
      this.kitaplarService.update(this.kitaplar.id!, this.kitaplar).subscribe();
      setTimeout(() => {
        this.kitaplarVeriAl();
      }, 200);
    } else {
      this.UyariDisplay = true;
    }
    this.display = false;
  }
}
