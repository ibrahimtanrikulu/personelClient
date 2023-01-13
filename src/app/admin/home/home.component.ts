import { Component, OnInit } from '@angular/core';
import { Departman } from 'src/app/Interface/Departman/departman';
import { DepartmanRol } from 'src/app/Interface/Departman/departmanRol';
import { Sube } from 'src/app/Interface/Sube/sube';
import { Personel } from 'src/app/model/Personel/personel';
import { DepartmanService } from 'src/app/Services/Departman/departman.service';
import { DepartmanRolService } from 'src/app/Services/Departman/departmanRol.service';
import { PersonelService } from 'src/app/Services/Personel/personel.service';
import { SubeService } from 'src/app/Services/Sube/sube.service';

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
  constructor(
    private personelService: PersonelService,
    private departmanService: DepartmanService,
    private departmanRolService: DepartmanRolService,
    private subeService: SubeService
  ) {this.getAll()}

  ngOnInit(): void {}

  getAll() {
    this.personelService.getList().subscribe((s) => (this.personelTablo = s));
    this.departmanService.read().subscribe((s) => (this.departmanTablo = s));
    this.departmanRolService
      .read()
      .subscribe((s) => (this.departmanRolTablo = s));
    this.subeService.read().subscribe((s) => (this.subeTablo = s));
  }
}