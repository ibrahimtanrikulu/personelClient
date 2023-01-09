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
  netBrut: boolean = false;
  cocukSayisi: number = 0;
  medeniDurum: string = '';
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
    this.deneme = [
      {
        ay: 'ocak',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'subat',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'mart',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'nisan',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'mayıs',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'haziran',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'temmuz',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'agustos',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'eylül',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'ekim',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'kasım',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
      {
        ay: 'aralık',
        maas: this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : 0,
      },
    ];
    if (
      this.personel.personelKimlik?.medeniHal &&
      this.personel.personelKimlik?.cocukSayisi &&
      this.personel.personelSigorta?.sigortaPrimiIsverenIndirim
    ) {
      this.medeniDurum = this.personel.personelKimlik?.medeniHal;
      this.cocukSayisi = this.personel.personelKimlik.cocukSayisi;
      this.spiph = this.personel.personelSigorta.sigortaPrimiIsverenIndirim;
    }
    console.log(this.medeniDurum, this.cocukSayisi, this.spiph);
  }

  maasHesapla() {}
}
