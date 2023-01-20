import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
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
  sube!: Sube;
  public SubeForm!: FormGroup;
  subeDialog: boolean = false;
  saveVsUpdate: boolean = false;

  constructor(
    private subeService: SubeService,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.SubeGetAll();
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
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

  addSubeButton() {
    this.SubeForm.reset();
    this.saveVsUpdate = false;
    this.subeDialog = true;
  }

  SubeGetAll() {
    this.subeService.read().subscribe((s) => {
      this.SubeListe = s;
    });
  }

  DeleteSube(e: any) {
    this.confirmationService.confirm({
      message: 'Bu Şubeyi silmek istiyormusunuz',
      header: 'Silinsinmi',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subeService.remove(e.id).subscribe((s) => {
          this.SubeGetAll();
        });
      },
    });
  }

  Save() {
    if (this.saveVsUpdate && this.sube) {
      this.sube = <Sube>{
        ad: this.SubeForm.value.ad,
        id: this.SubeForm.value.id,
      };
      this.subeService.update(this.sube).subscribe((s) => {
        this.SubeGetAll();
        this.subeDialog = false;
      });
    } else {
      this.sube = <Sube>{
        ad: this.SubeForm.value.ad,
      };
      this.subeService.save(this.sube).subscribe((s) => {
        this.SubeGetAll();
        this.subeDialog = false;
      });
    }
  }

  editButton(e: Sube) {
    this.sube = e;
    this.SubeForm.setValue(this.sube);
    this.saveVsUpdate = true;
    this.subeDialog = true;
  }
}
