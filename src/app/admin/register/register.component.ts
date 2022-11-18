import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Kullanici } from 'src/app/model/kullanici.model';
import { KullaniciService } from 'src/app/model/kullanici.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  Kullanici: Kullanici = new Kullanici();
  public KullaniciForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private kullaniciService: KullaniciService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.KullaniciForm = this.formBuilder.group({
      kullanici: new FormControl('', [Validators.required]),
      sifre: new FormControl('', [Validators.required]),
      isim: new FormControl('', [Validators.required]),
      soyad: new FormControl('', [Validators.required]),
      tc: new FormControl('', [Validators.required]),
    });
  }

  save() {
    this.Kullanici.kullanici = this.KullaniciForm.value.kullanici;
    this.Kullanici.sifre = this.KullaniciForm.value.sifre;
    this.Kullanici.isim = this.KullaniciForm.value.isim;
    this.Kullanici.soyad = this.KullaniciForm.value.soyad;
    this.Kullanici.tc = this.KullaniciForm.value.tc;
    this.Kullanici.yetki = false;
    this.Kullanici.kiralananKitap = 0;
    this.kullaniciService.save(this.Kullanici).subscribe();

    this.router.navigateByUrl('/login');
  }
}
