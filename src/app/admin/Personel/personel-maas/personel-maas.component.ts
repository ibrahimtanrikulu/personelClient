import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Departman } from 'src/app/Interface/Departman/departman';
import { DepartmanRol } from 'src/app/Interface/Departman/departmanRol';
import { Sube } from 'src/app/Interface/Sube/sube';
import { PersonelMaasHesaplaModel } from 'src/app/model/Personel/personelMaasHesaplaModel';
import { DepartmanService } from 'src/app/Services/Departman/departman.service';
import { DepartmanRolService } from 'src/app/Services/Departman/departmanRol.service';
import { PersonelMaasService } from 'src/app/Services/Personel/personel-maas.service';
import { SubeService } from 'src/app/Services/Sube/sube.service';

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

  deneme: any[] = [];

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
  maasTuruSec() {
    if (this.netBrut == 'Brut') {
      this.brut = this.personel.personelSigorta?.brutUcret;
      this.deneme = [
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
      ];
    } else if (this.netBrut == 'Net') {
      let net = this.personel.personelSigorta?.netUcret;
      this.deneme = [
        {
          ay: 'ocak',
          maas: net ? net : 0,
        },
        {
          ay: 'subat',
          maas: net ? net : 0,
        },
        {
          ay: 'mart',
          maas: net ? net : 0,
        },
        {
          ay: 'nisan',
          maas: net ? net : 0,
        },
        {
          ay: 'mayıs',
          maas: net ? net : 0,
        },
        {
          ay: 'haziran',
          maas: net ? net : 0,
        },
        {
          ay: 'temmuz',
          maas: net ? net : 0,
        },
        {
          ay: 'agustos',
          maas: net ? net : 0,
        },
        {
          ay: 'eylül',
          maas: net ? net : 0,
        },
        {
          ay: 'ekim',
          maas: net ? net : 0,
        },
        {
          ay: 'kasım',
          maas: net ? net : 0,
        },
        {
          ay: 'aralık',
          maas: net ? net : 0,
        },
      ];
    }
  }

  maasHesapla() {
    console.log(this.brut, this.personel.personelSigorta?.netUcret);
  }
}
