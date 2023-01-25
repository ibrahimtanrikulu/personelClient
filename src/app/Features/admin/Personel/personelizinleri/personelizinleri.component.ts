import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { PersonelIzin } from 'src/app/Core/Interface/Personel/personelizin';
import { PersonelizinService } from 'src/app/Core/Services/Personel/personelizin.service';
import { PersonelIzinModel } from 'src/app/Core/model/Personel/personelizinModel';

@Component({
  selector: 'app-personelizinleri',
  templateUrl: './personelizinleri.component.html',
  styleUrls: ['./personelizinleri.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService],
})
export class PersonelizinleriComponent implements OnInit {
  TabloData: PersonelIzinModel[] = [];
  topluIzinEkle: boolean = false;
  izinForm!: FormGroup;
  personelIzin!: PersonelIzin;
  id: number = 0;
  constructor(
    private personelIzinService: PersonelizinService,
    private formBuider: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.createFrom();
    this.getAll();
  }

  ngOnInit(): void {}

  getAll() {
    this.personelIzinService.getList().subscribe((s) => (this.TabloData = s));
  }
  topluIzinEkleMethod(e?: any) {
    this.id = e;
    this.topluIzinEkle = true;
  }
  tekIzinDuzenleMethod(e: PersonelIzin) {
    this.personelIzin = e;
    this.izinForm.patchValue(this.personelIzin);
    this.topluIzinEkle = true;
  }
  createFrom() {
    this.izinForm = new FormGroup({
      id: new FormControl(0),
      baslangicGun: new FormControl(Date),
      bitisGun: new FormControl(Date),
      neden: new FormControl(''),
      turu: new FormControl(''),
      isActive: new FormControl(false),
      creationDateTime: new FormControl(Date),
      updateDate: new FormControl(Date),
      personelId: new FormControl(0),
    });
  }
  save() {
    if (this.personelIzin) {
      this.personelIzin = <PersonelIzin>{
        id: this.izinForm.value.id,
        baslangicGun: this.izinForm.value.baslangicGun,
        bitisGun: this.izinForm.value.bitisGun,
        personelId: this.izinForm.value.personelId,
        neden: this.izinForm.value.neden,
        Turu: this.izinForm.value.turu,
        isActive: this.izinForm.value.isActive,
        creationDateTime: this.izinForm.value.creationDateTime,
        updateDate: this.izinForm.value.updateDate,
      };
      this.personelIzinService.update(this.personelIzin);
    } else {
      if (this.id > 0) {
        this.personelIzin = <PersonelIzin>{
          baslangicGun: this.izinForm.value.baslangicGun,
          bitisGun: this.izinForm.value.bitisGun,
          personelId: this.id,
          neden: this.izinForm.value.neden,
          Turu: this.izinForm.value.turu,
          isActive: false,
        };
        this.personelIzinService.save(this.personelIzin);
        this.personelIzin = {};
      } else {
        let dizi: PersonelIzin[] = [];
        this.TabloData.map((m) => {
          this.personelIzin = <PersonelIzin>{
            baslangicGun: this.izinForm.value.baslangicGun,
            bitisGun: this.izinForm.value.bitisGun,
            personelId: m.id,
            neden: this.izinForm.value.neden,
            Turu: this.izinForm.value.turu,
            isActive: false,
          };
          dizi.push(this.personelIzin);
        });

        this.personelIzinService.saveList(dizi);
      }
    }
  }
  DeleteIzin(e: PersonelIzin) {
    this.confirmationService.confirm({
      message: 'Bu izini silmek istiyormusunuz',
      header: 'Silinsinmi',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.personelIzinService.remove(e);
        this.personelIzin = {};
      },
    });
  }
}
