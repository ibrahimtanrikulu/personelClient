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
import { Sube } from 'src/app/Interface/Sube/sube';
import { DepartmanService } from 'src/app/Services/Departman/departman.service';
import { SubeService } from 'src/app/Services/Sube/sube.service';

@Component({
  selector: 'app-departman',
  templateUrl: './departman.component.html',
  styleUrls: ['./departman.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class DepartmanComponent implements OnInit {
  subeliste: Sube[] = [];
  departmanListe: Departman[] = [];
  cols: any[] = [];
  input: any[] = [];
  departman?: Departman;
  public DepartmanForm!: FormGroup;

  DepartmanDialog: boolean = false;
  SilDepartman: boolean = false;
  saveVsUpdate: boolean = false;

  constructor(
    private departmanService: DepartmanService,
    private subeService: SubeService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
    this.cols = [
      { field: 'subeAdi', header: 'Şubesi' },
      { field: 'isim', header: 'Departman ismi' },
      { field: 'creationDateTime', header: 'Departman oluşturulma tarihi' },
      { field: 'button', type: 'edit' },
    ];

    this.DepartmanForm = this.formBuilder.group({
      id: new FormControl(''),
      subeAdi: new FormControl(''),
      subeId: new FormControl('', [Validators.required]),
      isim: new FormControl('', [Validators.required]),
      creationDateTime: new FormControl(Date),
      updateDate: new FormControl(Date),
      isActive: new FormControl(false),
    });
    this.DepartmanGetAll();
  }

  ngOnInit(): void {}

  addPersonelButton() {
    this.DepartmanForm.reset();
    this.saveVsUpdate = false;
    this.DepartmanDialog = true;
  }

  DepartmanGetAll() {
    this.subeService.read().subscribe((s) => (this.subeliste = s));
    this.departmanService.read().subscribe((s) => (this.departmanListe = s));
    setTimeout(() => {
      this.departmanListe.map((m) => {
        this.subeliste.map((ma) => {
          if (m.subeId == ma.id) {
            m.subeAdi = ma.ad;
          }
        });
      });
    }, 200);
  }

  DeleteDepartman(e: any) {
    this.DeletePersonel(e);
  }
  DeletePersonel(e: any) {
    this.confirmationService.confirm({
      message: 'Bu Departman silmek istiyormusunuz',
      header: 'Silinsinmi',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.departmanService.remove(e.id);
        setTimeout(() => {
          this.DepartmanGetAll();
          this.SilDepartman = false;
        }, 300);
      },
    });
  }

  Save() {
    if (this.saveVsUpdate && this.departman) {
      this.departman = <Departman>{
        isim: this.DepartmanForm.value.isim,
        subeId: this.DepartmanForm.value.subeId.id,
        creationDateTime: this.DepartmanForm.value.creationDateTime,
        updateDate: this.DepartmanForm.value.updateDate,
        id: this.DepartmanForm.value.id,
      };
      console.log(this.departman);
      this.departmanService.update(this.departman);
    } else {
      this.departman = <Departman>{
        isim: this.DepartmanForm.value.isim,
        subeId: this.DepartmanForm.value.subeId.id,
        creationDateTime: this.DepartmanForm.value.creationDateTime,
        updateDate: this.DepartmanForm.value.updateDate,
        isActive: false,
      };
      this.departmanService.save(this.departman);
    }

    // setTimeout(() => {
    //   this.departmanService.errorMesage.forEach((element) => {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Error',
    //       detail: element,
    //     });
    //   });
    //   this.DepartmanGetAll();
    // }, 300);
  }

  editButton(e: Departman) {
    this.departman = e;
    this.DepartmanForm.setValue(this.departman);
    this.saveVsUpdate = true;
    this.DepartmanDialog = true;
  }
}
