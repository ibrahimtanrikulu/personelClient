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
import { Sube } from 'src/app/Interface/Sube/sube';
import { SubeService } from 'src/app/Services/Sube/sube.service';

@Component({
  selector: 'app-sube',
  templateUrl: './sube.component.html',
  styleUrls: ['./sube.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class SubeComponent implements OnInit {
  SubeListe: any[] = [];
  cols: any[] = [];
  input: any[] = [];

  sube!: Sube;
  public SubeForm!: FormGroup;

  DepartmanDialog: boolean = false;
  SilDepartman: boolean = false;
  saveVsUpdate: boolean = false;

  constructor(
    private subeService: SubeService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
    this.DepartmanGetAll();
    this.cols = [
      { field: 'ad', header: 'Şube adı' },
      { field: 'creationDateTime', header: 'Şube oluşturulma tarihi' },
      { field: 'button', type: 'edit' },
    ];

    this.SubeForm = this.formBuilder.group({
      id: new FormControl(0),
      ad: new FormControl('', [Validators.required]),
      creationDateTime: new FormControl(Date),
      updateDate: new FormControl(Date),
      isActive: new FormControl(false),
    });
  }

  ngOnInit(): void {}

  addSubeButton() {
    this.SubeForm.reset();
    this.saveVsUpdate = false;
    this.DepartmanDialog = true;
  }

  DepartmanGetAll() {
    this.subeService.read().subscribe((s) => (this.SubeListe = s));
  }

  DeleteDepartman(e: any) {
    this.DeletePersonel(e);
  }
  DeletePersonel(e: any) {
    this.confirmationService.confirm({
      message: 'Bu Şubeyi silmek istiyormusunuz',
      header: 'Silinsinmi',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subeService.remove(e.id);
        setTimeout(() => {
          this.DepartmanGetAll();
          this.SilDepartman = false;
        }, 300);
      },
    });
  }

  Save() {
    if (this.saveVsUpdate && this.sube) {
      this.sube = <Sube>{
        ad: this.SubeForm.value.ad,
        id: this.SubeForm.value.id,
      };
      this.subeService.update(this.sube);
    } else {
      this.sube = <Sube>{
        ad: this.SubeForm.value.ad,
      };
      this.subeService.save(this.sube);
    }
  }

  editButton(e: Sube) {
    this.sube = e;
    this.SubeForm.setValue(this.sube);
    this.saveVsUpdate = true;
    this.DepartmanDialog = true;
  }
}
