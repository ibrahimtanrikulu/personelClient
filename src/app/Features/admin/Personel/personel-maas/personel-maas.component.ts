import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Departman } from 'src/app/Core/Interface/Departman/departman';
import { DepartmanRol } from 'src/app/Core/Interface/Departman/departmanRol';
import { Sube } from 'src/app/Core/Interface/Sube/sube';
import { DepartmanService } from 'src/app/Core/Services/Departman/departman.service';
import { DepartmanRolService } from 'src/app/Core/Services/Departman/departmanRol.service';
import { PersonelMaasService } from 'src/app/Core/Services/Personel/personel-maas.service';
import { SubeService } from 'src/app/Core/Services/Sube/sube.service';
import { PersonelMaasHesaplaModel } from 'src/app/Core/model/Personel/personelMaasHesaplaModel';

@Component({
  selector: 'app-personel-maas',
  templateUrl: './personel-maas.component.html',
  styleUrls: ['./personel-maas.component.scss'],
  providers: [MessageService],
})
export class PersonelMaasComponent implements OnInit {
  TabloData: PersonelMaasHesaplaModel[] = [];
  personel: PersonelMaasHesaplaModel = {};
  dialogDisplay: boolean = false;
  netBrut: string = '';

  cocukSayisi?: number;
  medeniDurum?: string = '';
  spiph: boolean = false;

  maasData: any[] = [];

  departmanListe: Departman[] = [];
  subeListe: Sube[] = [];
  departmanRolListe: DepartmanRol[] = [];
  filterDepartmanListe: Departman[] = [];
  filterDepartmanRolListe: DepartmanRol[] = [];
  subeId: number = 0;
  departmanId: number = 0;
  DepartmanRolId: number = 0;

  constructor(
    private departmanService: DepartmanService,
    private departmanRolService: DepartmanRolService,
    private subeService: SubeService,
    private messageService: MessageService,
    private personelMaasService: PersonelMaasService
  ) {}
  ngOnInit(): void {
    this.getAll();
  }
  temelData() {}
  getAll() {
    this.departmanService.read().subscribe((s) => (this.departmanListe = s));
    this.departmanRolService
      .read()
      .subscribe((s) => (this.departmanRolListe = s));
    this.subeService.read().subscribe((s) => (this.subeListe = s));
  }
  filterSubeChange(e: any) {
    this.subeId = 0;
    this.subeId = e.value.id;
    this.filterDepartmanListe = [];
    let id = e.value.id;
    this.departmanListe.filter((f) => {
      if (f.subeId == id) {
        this.filterDepartmanListe.push(f);
      }
    });
  }
  filterDepartmanChange(e: any) {
    this.departmanId = 0;
    this.departmanId = e.value.id;
    this.filterDepartmanRolListe = [];
    let id = e.value.id;
    this.departmanRolListe.filter((f) => {
      if (f.departmanId == id) {
        this.filterDepartmanRolListe.push(f);
      }
    });
  }
  filterDepartmanRolChange(e: any) {
    this.DepartmanRolId = 0;
    this.DepartmanRolId = e.value.id;
  }
  filter() {
    let deger =
      this.subeId + '-' + this.departmanId + '-' + this.DepartmanRolId;
    this.personelMaasService
      .getList(deger)
      .subscribe((s) => (this.TabloData = s));
  }

  maasHesaplaDialog(e: PersonelMaasHesaplaModel) {
    this.dialogDisplay = true;
    this.personel = e;
    this.medeniDurum = this.personel.personelKimlik?.medeniHal;
    if (this.personel.personelSigorta?.sigortaPrimiIsverenIndirim) {
      this.spiph = this.personel.personelSigorta?.sigortaPrimiIsverenIndirim;
    }
    this.cocukSayisi = this.personel.personelKimlik?.cocukSayisi;
  }

  brut: any;
  toplamBrut: number = 0;
  net: any;
  SSKprimi: number = 0;
  sigortasiIscininPayi: number = 0;
  DamgaVergisiMiktari: number = 0;
  GelirVergisininMatrahi: number = 0;
  gelirDizisi: any[] = [];
  maasTuruSec() {
    if (this.netBrut == 'Brut') {
      this.brut = this.personel.personelSigorta?.brutUcret;
      this.maasData = [
        {
          ay: 'ocak',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'subat',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'mart',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'nisan',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'mayıs',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'haziran',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'temmuz',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'agustos',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'eylül',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'ekim',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'kasım',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'aralık',
          maas: this.brut ? this.brut : 0,
        },
        {
          ay: 'Toplam',
          maas: this.toplamBrut,
        },
      ];
    } else if (this.netBrut == 'Net') {
      this.net = this.personel.personelSigorta?.netUcret;
      this.maasData = [
        {
          ay: 'ocak',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'subat',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'mart',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'nisan',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'mayıs',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'haziran',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'temmuz',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'agustos',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'eylül',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'ekim',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'kasım',
          maas: this.net ? this.net : 0,
        },
        {
          ay: 'aralık',
          maas: this.net ? this.net : 0,
        },
      ];
    }
  }
  maasHesapla() {
    let gelirVergisi: number = 0;
    this.SSKprimi = this.brut * 0.14;
    this.sigortasiIscininPayi = this.brut * 0.01;
    this.DamgaVergisiMiktari = this.brut * 0.00759;
    this.GelirVergisininMatrahi =
      this.brut - (this.SSKprimi + this.sigortasiIscininPayi);

    if (this.netBrut == 'Brut') {
      let sabirBrut = this.brut;
      for (let index = 0; index < 12; index++) {
        if (this.brut <= 70000) {
          gelirVergisi += sabirBrut * 0.15;
          this.gelirDizisi.push(sabirBrut * 0.15);
        } else if (this.brut > 70000 && this.brut <= 150000) {
          gelirVergisi += sabirBrut * 0.2;
          this.gelirDizisi.push(sabirBrut * 0.2);
        } else if (this.brut > 150000 && this.brut <= 370000) {
          gelirVergisi += sabirBrut * 0.27;
          this.gelirDizisi.push(sabirBrut * 0.27);
        } else if (this.brut > 370000 && this.brut <= 1900000) {
          gelirVergisi += sabirBrut * 0.35;
          this.gelirDizisi.push(sabirBrut * 0.35);
        } else if (this.brut > 1900000) {
          gelirVergisi += sabirBrut * 0.4;
          this.gelirDizisi.push(sabirBrut * 0.4);
        }
        //this.brut += sabirBrut;
        this.toplamBrut = this.brut;
        this.toplamBrut += sabirBrut;
      }
      let KesintilerinToplami: number =
        this.SSKprimi +
        this.sigortasiIscininPayi +
        this.GelirVergisininMatrahi +
        this.DamgaVergisiMiktari +
        gelirVergisi;
      let netUcret = this.brut - KesintilerinToplami;
      this.net = netUcret / 12;
    } else if (this.netBrut == 'Net') {
      console.log('net bölümü');
    }
  }
}
