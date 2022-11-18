import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Anasayfa',
        items: [
          {
            label: 'anasayfa',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/anasayfa'],
          },
        ],
      },

      {
        label: 'kitaplar',
        items: [
          {
            label: 'Kitaplar',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/layout/kitapListe'],
          },
        ],
      },

      {
        label: 'Kitap Kategorileri',
        items: [
          {
            label: 'Kategoriler',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/layout/kategoriListe'],
            badge: 'NEW',
          },
        ],
      },

      {
        label: 'kiralamalar',
        items: [
          {
            label: 'Kiralanan Kitaplar',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/layout/kitapKirala'],
            badge: 'NEW',
          },
        ],
      },

      {
        label: 'Kullanicilar',
        items: [
          {
            label: 'Kullanıcı Tablosu',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/layout/kullanicilar'],
          },
        ],
      },
    ];
  }
}
