import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Kullanici } from 'src/app/model/kullanici.model';
import { KullaniciService } from 'src/app/model/kullanici.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  kullaniciListe: Kullanici[] = [];
  kullanici: Kullanici = new Kullanici();
  sonListe: any[] = [];
  constructor(
    private router: Router,
    private kullaniciService: KullaniciService
  ) {
    kullaniciService.findAll().subscribe((x) => (this.kullaniciListe = x));
  }

  ngOnInit(): void {}

  KullaniciGirisi(form: NgForm) {
    if (
      this.kullaniciListe.filter(
        (x) =>
          x.kullanici == this.kullanici.kullanici &&
          x.sifre == this.kullanici.sifre &&
          x.yetki == true
      ).length != 0
    ) {
      this.sonListe = this.kullaniciListe.filter(
        (x) =>
          x.kullanici == this.kullanici.kullanici &&
          x.sifre == this.kullanici.sifre &&
          x.yetki == true
      );
      localStorage.setItem('kullanici', this.sonListe[0].id);
      localStorage.setItem('token', 'true');
      this.router.navigateByUrl('/layout');
    } else if (
      this.kullaniciListe.filter(
        (x) =>
          x.kullanici == this.kullanici.kullanici &&
          x.sifre == this.kullanici.sifre &&
          x.yetki == false
      ).length != 0
    ) {
      this.sonListe = this.kullaniciListe.filter(
        (x) =>
          x.kullanici == this.kullanici.kullanici &&
          x.sifre == this.kullanici.sifre &&
          x.yetki == false
      );
      localStorage.setItem('kullanici', this.sonListe[0].id);
      localStorage.setItem('token', 'true');
      this.router.navigateByUrl('/anasayfa');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
