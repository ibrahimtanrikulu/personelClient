import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss'],
  providers: [ConfirmationService],
})
export class GenericComponent {
  //Tablo
  @Input() cols: any[] = [];
  @Input() TabloData: any[] = [];
  @Input() header: string = '';
  @Input() EkleButtonDurum: boolean = false;

  //ekleme-silme-guncelleme
  @Input() FormHeader = '';
  @Input() form!: FormGroup;
  @Input() DialogMessage: string = '';
  @Input() DialogHeader: string = '';
  @Input() RadioButtonData: any[] = [];
  @Input() formTipleri: any[] = [];
  @Input() globalFilterList: any[] = [];
  @Output() kayit = new EventEmitter<boolean>();
  @Output() sil = new EventEmitter<boolean>();
  @Output() CikisFormGroup = new EventEmitter<FormGroup>();
  islemDeger!: boolean;
  DialogOpen: boolean = false;

  constructor(
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  openNew() {
    this.form.reset();
    this.DialogOpen = true;
    this.islemDeger = false;
  }

  edit(item: any) {
    this.form.reset();
    this.DialogOpen = true;
    this.islemDeger = true;
    this.form.setValue(item);
    this.form.value.id = item.id;
  }

  delete(item: any) {
    this.confirmationService.confirm({
      message: this.DialogMessage,
      header: this.DialogHeader,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.form.value.id = item.id;
        this.sil.emit(true);
        this.CikisFormGroup.emit(this.form);
      },
    });
  }

  save() {
    this.kayit.emit(this.islemDeger);
    this.CikisFormGroup.emit(this.form);
    this.DialogOpen = false;
  }
}
