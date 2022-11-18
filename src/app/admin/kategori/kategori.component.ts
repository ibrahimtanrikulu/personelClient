import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Kategori } from 'src/app/model/kategori.model';
import { KategoriService } from 'src/app/model/kategori.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.scss'],
  providers: [ConfirmationService],
})
export class KategoriComponent implements OnInit {
  id: number = 0;

  kategoriListe: any;

  kategori: Kategori = new Kategori();
  cols: any[] = [];
  input: any[] = [];
  public KategoriForm!: FormGroup;

  constructor(
    private router: Router,
    private kategorilerService: KategoriService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder
  ) {
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'Kategori ismi' },
      { field: 'aciklama', header: 'Acıklama' },
      { field: 'button', type: 'edit' },
    ];

    this.input = [
      { isim: 'id', type: 'inputnumber', text: 'ID', required: true },
      { isim: 'name', type: 'input', text: 'Kategori ismi', required: true },
      {
        isim: 'aciklama',
        type: 'textarea',
        text: 'Kategori Acıklaması',
        required: false,
      },
      { type: 'button', text: 'Düzenle' },
    ];

    this.KategoriForm = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      aciklama: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.kategoriVeriCek();
  }

  kategoriVeriCek() {
    this.kategorilerService
      .findAll()
      .subscribe((x) => (this.kategoriListe = x));
  }

  DeleteKitaplar(item: boolean) {
    this.kategori.id = this.KategoriForm.value.id;
    if (
      item == true &&
      this.kategori.id != null &&
      this.kategori.id != undefined &&
      this.kategori.id != 0
    ) {
      this.kategorilerService.delete(this.kategori.id!).subscribe((p) =>
        this.kategoriListe.splice(
          this.kategoriListe.findIndex(
            (p: { id: number }) => p.id == this.kategori.id
          ),
          1
        )
      );
    }
  }

  Save(item: boolean) {
    if (item == true) {
      this.kategori.id = this.KategoriForm.value.id;
      this.kategori.name = this.KategoriForm.value.name;
      this.kategori.aciklama = this.KategoriForm.value.aciklama;
      this.kategorilerService
        .update(this.kategori.id!, this.kategori)
        .subscribe((p) => {
          this.kategoriListe.splice(
            this.kategoriListe.findIndex(
              (p: { id: number }) => p.id == this.id
            ),
            1,
            this.kategori
          );
        });
      this.router.navigateByUrl('/layout/kategoriListe');
    } else {
      this.kategori.name = this.KategoriForm.value.name;
      this.kategori.aciklama = this.KategoriForm.value.aciklama;
      this.kategorilerService.save(this.kategori).subscribe();
      this.router.navigateByUrl('/layout/kategoriListe');
    }
  }
}
