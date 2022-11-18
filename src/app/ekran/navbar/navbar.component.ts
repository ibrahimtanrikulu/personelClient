import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { map } from 'rxjs';
import { KategoriService } from 'src/app/model/kategori.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Kitap Kiralama',
        disabled: true,
      },

      {
        disabled: true,
      },
      {
        label: 'kategoriler',
        icon: 'pi pi-fw pi-pencil',
        items: [],
      },
      {
        label: 'Bütün kitaplar',
      },
    ];
  }

  kaldir() {
    localStorage.clear();
  }
}
