import { Component, OnInit } from '@angular/core';
import { KitaplarService } from '../../model/kitaplar.service';
import { ConfirmationService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Kitaplar } from '../../model/kitaplar.model';
import { KategoriService } from '../../model/kategori.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitaplar',
  templateUrl: './kitaplar.component.html',
  styleUrls: ['./kitaplar.component.scss'],
  providers: [ConfirmationService],
})
export class KitaplarComponent implements OnInit {
  id: number = 0;
  display: boolean = false;
  baslik = 'Kitaplar Listesi';
  kitaplarListesi: any;
  kategoriListe: any;
  kitap: Kitaplar = new Kitaplar();
  cols: any[] = [];
  input: any[] = [];
  filterListesi: any[] = [
    'ad',
    'yazar',
    'kategori',
    'tarih',
    'sayfa',
    'aciklama',
    'kiralanmaDurum',];
  public KitapForm!: FormGroup;

  constructor(
    private router: Router,
    private kitaplarService: KitaplarService,
    private kategorilerService: KategoriService,
    private formBuilder: FormBuilder
  ) {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'ad', header: 'Kitap adı' },
      { field: 'yazar', header: 'Yazar' },
      { field: 'kategori', header: 'Kategori' },
      { field: 'tarih', header: 'Tarih' },
      { field: 'sayfa', header: 'Sayfa' },
      { field: 'aciklama', header: 'Acıklama' },
      { field: 'kiralanmaDurum', header: 'Durum' },
      { field: 'button' },
    ];

    this.input = [
      { isim: 'id', type: 'inputnumber', text: 'ID', required: true },
      { isim: 'ad', type: 'input', text: 'Kitap adı', required: true },
      { isim: 'yazar', type: 'input', text: 'Kitap yazarı', required: true },
      { isim: 'sayfa', type: 'inputnumber', text: 'Kitap sayfa sayısı', required: true },
      { isim: 'aciklama', type: 'textarea', text: 'Kitap acıklaması', required: true },
      { isim: 'kiralanmaDurum', type: 'checkbox', text: 'Kitap Durumu', required: true },
      { isim: 'kategori', type: 'radio', text: 'Kitap kategorisi', required: true },
      { isim: 'tarih', type: 'calendar', text: 'Kitap çıkış tarihi', required: true },
      { type: 'button', text: 'kaydet' },
    ];

    this.KitapForm = this.formBuilder.group({
      id: [0, Validators.required],
      ad: ['', Validators.required],
      yazar: ['', Validators.required],
      sayfa: ['', Validators.required],
      aciklama: ['', Validators.required],
      kiralanmaDurum: [false],
      tarih: ['', Validators.required],
      kategori: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.kitaplarVeriCek();
    this.kategoriVeriCek();
  }

  kategoriVeriCek() {
    this.kategorilerService
      .findAll()
      .subscribe((x) => (this.kategoriListe = x));
  }

  kitaplarVeriCek() {
    this.kitaplarService.findAll().subscribe((x) => (this.kitaplarListesi = x));
  }

  DeleteKitaplar(item: boolean) {
    this.kitap.id = this.KitapForm.value.id;
    if (
      item == true &&
      this.kitap.id != null &&
      this.kitap.id != undefined &&
      this.kitap.id != 0
    ) {
      this.kitaplarService.delete(this.kitap.id!).subscribe((p) =>
        this.kitaplarListesi.splice(
          this.kitaplarListesi.findIndex(
            (p: { id: number }) => p.id == this.kitap.id
          ),
          1
        )
      );
    }
  }

  Save(item: boolean) {
    if (item == true) {
      this.kitap.id = this.KitapForm.value.id;
      this.kitap.ad = this.KitapForm.value.ad;
      this.kitap.yazar = this.KitapForm.value.yazar;
      this.kitap.sayfa = this.KitapForm.value.sayfa;
      this.kitap.aciklama = this.KitapForm.value.aciklama;
      this.kitap.kategori = this.KitapForm.value.kategori;
      this.kitap.tarih = this.KitapForm.value.tarih;
      this.kitap.kiralanmaDurum = this.KitapForm.value.kiralanmaDurum;
      this.kitaplarService.update(this.kitap.id!, this.kitap).subscribe((p) => {
        this.kitaplarListesi.splice(
          this.kitaplarListesi.findIndex(
            (p: { id: number }) => p.id == this.id
          ),
          1,
          this.kitap
        );
      });
      this.router.navigateByUrl('/layout/kitapListe');
    } else {
      this.kitap.ad = this.KitapForm.value.ad;
      this.kitap.yazar = this.KitapForm.value.yazar;
      this.kitap.sayfa = this.KitapForm.value.sayfa;
      this.kitap.aciklama = this.KitapForm.value.aciklama;
      this.kitap.kategori = this.KitapForm.value.kategori;
      this.kitap.tarih = this.KitapForm.value.tarih;
      this.kitap.kiralanmaDurum = this.KitapForm.value.kiralanmaDurum;
      this.kitaplarService.save(this.kitap).subscribe();
      this.router.navigateByUrl('/layout/kitapListe');
    }
  }
}
