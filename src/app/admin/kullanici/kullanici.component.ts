import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Kullanici } from '../../model/kullanici.model';
import { KullaniciService } from '../../model/kullanici.service';

@Component({
  selector: 'app-kullanici',
  templateUrl: './kullanici.component.html',
  styleUrls: ['./kullanici.component.scss'],
})
export class KullaniciComponent implements OnInit {
  baslik = 'Kullanıcıların Listesi';
  kullaniciListesi: any;
  kullanici: Kullanici = new Kullanici();
  cols: any[] = [];
  input: any[] = [];
  filterListesi: any[] = ['kullanici', 'sifre', 'isim', 'soyad', 'tc', 'yetki'];
  public KullaniciForm!: FormGroup;

  constructor(
    private router: Router,
    private kullaniciService: KullaniciService,
    private formBuilder: FormBuilder
  ) {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'kullanici', header: 'Kullanıcı adı' },
      { field: 'sifre', header: 'Sifre' },
      { field: 'isim', header: 'İsim' },
      { field: 'soyad', header: 'Soyad' },
      { field: 'tc', header: 'Tc' },
      { field: 'yetki', header: 'Yetki' },
      { field: 'button' },
    ];

    this.input = [
      { isim: 'id', type: 'inputnumber', text: 'ID', required: true },
      { isim: 'tc', type: 'inputnumber', text: 'Kullanıcı tc', required: true },
      { isim: 'kullanici', type: 'input', text: 'Kullanıcı adı', required: true },
      { isim: 'sifre', type: 'input', text: 'Kullanıcı sifresi', required: true },
      { isim: 'isim', type: 'input', text: 'Kullanıcı ismi', required: true },
      { isim: 'soyad', type: 'input', text: 'Kullanıcı soyadı', required: true },
      { isim: 'yetki', type: 'checkbox', text: 'Kullanıcı yetkisi', required: true },
      { type: 'button', text: 'kaydet' },
    ];

    this.KullaniciForm = this.formBuilder.group({
      id: [0, Validators.required],
      kullanici: ['', Validators.required],
      sifre: ['', Validators.required],
      isim: ['', Validators.required],
      soyad: ['', Validators.required],
      tc: ['', Validators.required],
      yetki: [false],
    });
  }

  ngOnInit(): void {
    this.kitaplarVeriCek();
  }

  kitaplarVeriCek() {
    this.kullaniciService
      .findAll()
      .subscribe((x) => (this.kullaniciListesi = x));
  }

  DeleteKitaplar(item: boolean) {
    this.kullanici.id = this.KullaniciForm.value.id;
    if (
      item == true &&
      this.kullanici.id != null &&
      this.kullanici.id != undefined &&
      this.kullanici.id != 0
    ) {
      this.kullaniciService.delete(this.kullanici.id!).subscribe();
      this.kitaplarVeriCek();
    }
  }

  Save(item: boolean) {
    if (item == true) {
      this.kullanici.id = this.KullaniciForm.value.id;
      this.kullanici.kullanici = this.KullaniciForm.value.kullanici;
      this.kullanici.sifre = this.KullaniciForm.value.sifre;
      this.kullanici.isim = this.KullaniciForm.value.isim;
      this.kullanici.soyad = this.KullaniciForm.value.soyad;
      this.kullanici.tc = this.KullaniciForm.value.tc;
      this.kullanici.yetki = this.KullaniciForm.value.yetki;
      this.kullaniciService
        .update(this.kullanici.id!, this.kullanici)
        .subscribe();
      this.kitaplarVeriCek();
    } else {
      this.kullanici.id = this.KullaniciForm.value.id;
      this.kullanici.kullanici = this.KullaniciForm.value.kullanici;
      this.kullanici.sifre = this.KullaniciForm.value.sifre;
      this.kullanici.isim = this.KullaniciForm.value.isim;
      this.kullanici.soyad = this.KullaniciForm.value.soyad;
      this.kullanici.tc = this.KullaniciForm.value.tc;
      this.kullanici.yetki = this.KullaniciForm.value.yetki;
      this.kullaniciService.save(this.kullanici).subscribe();
      this.kitaplarVeriCek();
    }
  }
}
