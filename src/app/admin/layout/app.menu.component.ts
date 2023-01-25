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
            routerLink: ['/layout/home'],
          },
        ],
      },

      {
        label: 'personeller',
        items: [
          {
            label: 'personeller',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/layout/personel'],
          },
          {
            label: 'personel Maaşlari',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/layout/personel/personel-maas'],
          },
          {
            label: 'personel izinleri',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/layout/personel/personel-izinleri'],
          },
          {
            label: 'isten çıkmış personeller',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/layout/personel/personel-istifa'],
          },
          {
            label: 'personel mesai işlemleri',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/layout/personel/personel-mesai'],
          },
        ],
      },

      {
        label: 'Departmanlar',
        items: [
          {
            label: 'Departmanlar',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/layout/departman'],
            badge: 'NEW',
          },
          {
            label: 'Departman Pozisyon',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/layout/departmanrol'],
            badge: 'NEW',
          },
        ],
      },

      {
        label: 'Şubeler',
        items: [
          {
            label: 'Şube',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/layout/sube'],
            badge: 'NEW',
          },
        ],
      }
      
    ];
  }
}
