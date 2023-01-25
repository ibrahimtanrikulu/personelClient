import { Component, OnInit } from '@angular/core';
import { Departman } from 'src/app/Core/Interface/Departman/departman';
import { DepartmanRol } from 'src/app/Core/Interface/Departman/departmanRol';
import { Sube } from 'src/app/Core/Interface/Sube/sube';
import { DepartmanService } from 'src/app/Core/Services/Departman/departman.service';
import { DepartmanRolService } from 'src/app/Core/Services/Departman/departmanRol.service';
import { PersonelService } from 'src/app/Core/Services/Personel/personel.service';
import { SubeService } from 'src/app/Core/Services/Sube/sube.service';
import { Personel } from 'src/app/Core/model/Personel/personel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  personelTablo: Personel[] = [];
  departmanTablo: Departman[] = [];
  departmanRolTablo: DepartmanRol[] = [];
  subeTablo: Sube[] = [];
  brutMaas: any;
  netMaas: any;
  constructor(
    private personelService: PersonelService,
    private departmanService: DepartmanService,
    private departmanRolService: DepartmanRolService,
    private subeService: SubeService
  ) {
    this.getAll();
  }

  ngOnInit(): void {}

  getAll() {
    this.personelService.getList().subscribe((s) => {
      this.personelTablo = s;
      s.map((m) => {
        this.brutMaas += m.personelSigorta?.brutUcret;
        this.netMaas += m.personelSigorta?.netUcret;
      });
    });
    this.departmanService.read().subscribe((s) => (this.departmanTablo = s));
    this.departmanRolService
      .read()
      .subscribe((s) => (this.departmanRolTablo = s));
    this.subeService.read().subscribe((s) => (this.subeTablo = s));
  }
}
