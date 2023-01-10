import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { Departman } from 'src/app/Interface/Departman/departman';
import { DepartmanRol } from 'src/app/Interface/Departman/departmanRol';
import { Sube } from 'src/app/Interface/Sube/sube';
import { DepartmanService } from 'src/app/Services/Departman/departman.service';
import { DepartmanRolService } from 'src/app/Services/Departman/departmanRol.service';
import { SubeService } from 'src/app/Services/Sube/sube.service';

@Component({
  selector: 'app-departman-rol',
  templateUrl: './departman-rol.component.html',
  styleUrls: ['./departman-rol.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class DepartmanRolComponent implements OnInit {
  subeliste: Sube[] = [];
  departmanListe: Departman[] = [];
  filterDepartman: Departman[] = [];
  departmanRolListe: DepartmanRol[] = [];
  cols: any[] = [];
  input: any[] = [];
  departmanRol?: DepartmanRol;
  public DepartmanForm!: FormGroup;

  DepartmanDialog: boolean = false;
  SilDepartman: boolean = false;
  saveVsUpdate: boolean = false;

  constructor(
    private subeService: SubeService,
    private departmanService: DepartmanService,
    private departmanRolService: DepartmanRolService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
    this.cols = [
      { field: 'subeAdi', header: 'Şubesi' },
      { field: 'departmanAdi', header: 'Departman' },
      { field: 'isim', header: 'Departman Pozisyon ismi' },
      { field: 'button', type: 'edit' },
    ];

    this.DepartmanGetAll();
    this.CreateForm();
  }

  ngOnInit(): void {}

  CreateForm() {
    this.DepartmanForm = this.formBuilder.group({
      id: new FormControl(''),
      subeAdi: new FormControl(''),
      departmanAdi: new FormControl(''),
      departmanId: new FormControl('', [Validators.required]),
      isim: new FormControl('', [Validators.required]),
      creationDateTime: new FormControl(Date),
      updateDate: new FormControl(Date),
      isActive: new FormControl(false),
    });
  }

  filter(e: any) {
    this.filterDepartman = [];
    let id = e.value.id;
    this.departmanListe.filter((f) => {
      if (f.subeId == id) {
        this.filterDepartman.push(f);
      }
    });
  }

  addPersonelButton() {
    this.DepartmanForm.reset();
    this.saveVsUpdate = false;
    this.DepartmanDialog = true;
  }

  DepartmanGetAll() {
    this.subeService.read().subscribe((s) => (this.subeliste = s));
    this.departmanService.read().subscribe((s) => (this.departmanListe = s));
    this.departmanRolService
      .read()
      .subscribe((s) => (this.departmanRolListe = s));
    setTimeout(() => {
      this.departmanListe.map((m) => {
        this.subeliste.map((ma) => {
          if (m.subeId == ma.id) {
            m.subeAdi = ma.ad;
          }
        });
      });
      setTimeout(() => {
        this.departmanRolListe.map((m) => {
          this.departmanListe.map((ma) => {
            if (m.departmanId == ma.id) {
              m.departmanAdi = ma.isim;
              m.subeAdi = ma.subeAdi;
            }
          });
        });
      }, 200);
    }, 200);
  }

  DeleteDepartmanRol(e: any) {
    this.confirmationService.confirm({
      message: 'Bu Departman silmek istiyormusunuz',
      header: 'Silinsinmi',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.departmanRolService.remove(e.id);
        setTimeout(() => {
          this.DepartmanGetAll();
          this.SilDepartman = false;
        }, 300);
      },
    });
  }

  editButton(e: DepartmanRol) {
    this.departmanRol = e;
    this.DepartmanForm.setValue(this.departmanRol);
    this.saveVsUpdate = true;
    this.DepartmanDialog = true;
  }

  Save() {
    if (this.saveVsUpdate && this.departmanRol) {
      this.departmanRol = <DepartmanRol>{
        id: this.DepartmanForm.value.id,
        isim: this.DepartmanForm.value.isim,
        departmanId: this.DepartmanForm.value.departmanId.id,
        creationDateTime: this.DepartmanForm.value.creationDateTime,
        updateDate: this.DepartmanForm.value.updateDate,
        isActive: false,
      };
      console.log(this.departmanRol);
      this.departmanRolService.update(this.departmanRol);
    } else {
      this.departmanRol = <DepartmanRol>{
        isim: this.DepartmanForm.value.isim,
        departmanId: this.DepartmanForm.value.departmanId.id,
        creationDateTime: this.DepartmanForm.value.creationDateTime,
        updateDate: this.DepartmanForm.value.updateDate,
        isActive: false,
      };
      this.departmanRolService.save(this.departmanRol);
    }
  }
}
