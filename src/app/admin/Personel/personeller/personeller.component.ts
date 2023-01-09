import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Departman } from 'src/app/Interface/Departman/departman';
import { DepartmanService } from 'src/app/Services/Departman/departman.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Personel } from 'src/app/model/Personel/personel';
import { SubeService } from 'src/app/Services/Sube/sube.service';
import { DepartmanRol } from 'src/app/Interface/Departman/departmanRol';
import { DialogService } from 'primeng/dynamicdialog';
import { Sube } from 'src/app/Interface/Sube/sube';
import { PersonelDeneyim } from 'src/app/Interface/Personel/personelDeneyim';
import { PersonelAdres } from 'src/app/Interface/Personel/personelAdres';
import { PersonelEgitim } from 'src/app/Interface/Personel/personelEgitim';
import { PersonelKimlik } from 'src/app/Interface/Personel/personelKimlik';
import { PersonelSigorta } from 'src/app/Interface/Personel/personelSigorta';
import { Personeliletisim } from 'src/app/Interface/Personel/personeliletisim';
import { PersonelBanka } from 'src/app/Interface/Personel/personelBanka';
import { PersonelSirket } from 'src/app/Interface/Personel/personelSirket';
import { PersonelService } from 'src/app/Services/Personel/personel.service';
import { DepartmanRolService } from 'src/app/Services/Departman/departmanRol.service';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { GenericService } from 'src/app/Services/generic.service';

@Component({
  selector: 'app-personeller',
  templateUrl: './personeller.component.html',
  styleUrls: ['./personeller.component.scss'],
  providers: [ConfirmationService, MessageService, DialogService],
})
export class PersonellerComponent implements OnInit {
  TabloCols: any[] = [];
  TabloData: Personel[] = [];
  selectedPersonel?: any;
  PersonelDialog: boolean = false;
  SilPersonel: boolean = false;
  saveVsUpdatePersonel: boolean = false;
  personel: Personel = {};
  public PersonelForm!: FormGroup;

  departmanListe: Departman[] = [];
  subeListe: Sube[] = [];
  departmanRolListe: DepartmanRol[] = [];
  filterDepartmanListe: Departman[] = [];
  filterDepartmanRolListe: DepartmanRol[] = [];

  ulke: any[] = [];
  cinsiyet: any[] = [];
  kanGrubu: any[] = [];
  medeniHal: any[] = [];
  lisansDerece: any[] = [];
  EgitimDurumu: any[] = [];
  bolumu: any[] = [];
  il: any[] = [];
  ilce: any[] = [];
  calismaTipi: any[] = [];
  calisanTipi: any[] = [];
  bankaAdi: any[] = [];

  //deneyim
  DeneyimListe: PersonelDeneyim[] = [];
  DeneyimCols: any[] = [];
  deneyim!: PersonelDeneyim;
  public DeneyimForm!: FormGroup;
  DeneyimDialog: boolean = false;
  SilDeneyim: boolean = false;
  saveVsUpdateDeneyim: boolean = false;

  constructor(
    private personelService: PersonelService,
    private departmanService: DepartmanService,
    private departmanRolService: DepartmanRolService,
    private subeService: SubeService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private httpClientService: GenericService,
    private confirmationService: ConfirmationService
  ) {
    this.Temeldata();
    this.getAll();
    this.DeneyimCols = [
      { field: 'sirketIsmi', header: 'Şirket Adı' },
      { field: 'yil', header: 'Yıl' },
      { field: 'pozisyon', header: 'Pozisyon' },
      { field: 'button', type: 'edit' },
    ];
    this.DeneyimForm = this.formBuilder.group({
      id: new FormControl(''),
      sirketIsmi: new FormControl('', [Validators.required]),
      yil: new FormControl(0, [Validators.required]),
      pozisyon: new FormControl('', [Validators.required]),
    });
    this.createForm();
  }

  ngOnInit(): void {}
  Temeldata() {
    this.ulke = [
      { id: 1, text: 'Türkiye' },
      { id: 2, text: 'Abd' },
      { id: 3, text: 'İngiltere' },
    ];
    this.cinsiyet = [
      { id: 1, text: 'Erkek' },
      { id: 2, text: 'Kadın' },
    ];
    this.kanGrubu = [
      { id: 1, text: 'ARh+' },
      { id: 2, text: 'ARh-' },
      { id: 3, text: 'BRh+' },
      { id: 4, text: 'BRh-' },
      { id: 5, text: 'ABRh-' },
      { id: 6, text: 'ABRh+' },
      { id: 7, text: '0Rh+' },
      { id: 8, text: '0Rh-' },
    ];
    this.medeniHal = [
      { id: 1, text: 'Evli' },
      { id: 2, text: 'Bekar' },
    ];
    this.lisansDerece = [
      { id: 1, text: 'Önlisans' },
      { id: 2, text: 'Lisans' },
    ];
    this.EgitimDurumu = [
      { id: 1, text: 'Ünüversite' },
      { id: 2, text: 'Lise' },
      { id: 3, text: 'Ortaokul' },
      { id: 4, text: 'ilkOkul' },
    ];
    this.bolumu = [
      { id: 1, text: 'Mühendis' },
      { id: 2, text: 'İşletme' },
      { id: 3, text: 'Fen bilimleri' },
      { id: 4, text: 'Matematik' },
    ];
    this.il = [
      { id: 1, text: 'Muğla' },
      { id: 2, text: 'izmir' },
      { id: 3, text: 'Pekin' },
      { id: 4, text: 'London' },
    ];
    this.ilce = [
      { id: 1, text: 'Menteşe' },
      { id: 2, text: 'Marmaris' },
      { id: 3, text: 'Bodrum' },
      { id: 4, text: 'Fethiye' },
    ];
    this.calismaTipi = [
      { id: 1, text: 'Tam zamanlı' },
      { id: 2, text: 'Stajer' },
      { id: 3, text: 'Yarı zamanlı' },
    ];
    this.calisanTipi = [
      { id: 1, text: 'Normal' },
      { id: 2, text: 'Emekli' },
    ];
    this.bankaAdi = [
      { id: 1, text: 'Yapı kredi' },
      { id: 2, text: 'Akbank' },
      { id: 3, text: 'Vakıf bank' },
    ];
  }
  getAll() {
    this.personelService.getList().subscribe((s) => (this.TabloData = s));
    this.departmanService.read().subscribe((s) => (this.departmanListe = s));
    this.departmanRolService
      .read()
      .subscribe((s) => (this.departmanRolListe = s));
    this.subeService.read().subscribe((s) => (this.subeListe = s));
  }
  filterDepartmanChange(e: any) {
    this.filterDepartmanListe = [];
    let id = e.value.id;
    this.departmanListe.filter((f) => {
      if (f.subeId == id) {
        this.filterDepartmanListe.push(f);
      }
    });
  }
  filterDepartmanRolChange(e: any) {
    this.filterDepartmanRolListe = [];
    let id = e.value.id;
    this.departmanRolListe.filter((f) => {
      if (f.departmanId == id) {
        this.filterDepartmanRolListe.push(f);
      }
    });
  }
  createForm() {
    this.PersonelForm = this.formBuilder.group({
      id: new FormControl(this.personel.id ? this.personel?.id : ''),

      //Kimlik
      KimlikDogumYeri: new FormControl(
        this.personel.personelKimlik?.dogumYeri
          ? this.personel.personelKimlik?.dogumYeri
          : '',
        [Validators.required]
      ),
      KimlikKanGrubu: new FormControl(
        this.personel.personelKimlik?.kanGrubu
          ? this.personel.personelKimlik?.kanGrubu
          : '',
        [Validators.required]
      ),
      KimlikCinsiyet: new FormControl(
        this.personel.personelKimlik?.cinsiyet
          ? this.personel.personelKimlik?.cinsiyet
          : '',
        [Validators.required]
      ),
      KimlikUyruk: new FormControl(
        this.personel.personelKimlik?.uyruk
          ? this.personel.personelKimlik?.uyruk
          : '',
        [Validators.required]
      ),
      KimlikMedeniHal: new FormControl(
        this.personel.personelKimlik?.medeniHal
          ? this.personel.personelKimlik?.medeniHal
          : '',
        [Validators.required]
      ),
      KimlikCocukSayisi: new FormControl(
        this.personel.personelKimlik?.cocukSayisi
          ? this.personel.personelKimlik?.cocukSayisi
          : '',
        [Validators.required]
      ),
      KimlikDogumTarihi: new FormControl(
        this.personel.personelKimlik?.dogumTarihi
          ? this.personel.personelKimlik?.dogumTarihi
          : Date,
        [Validators.required]
      ),
      KimlikIsim: new FormControl(
        this.personel.personelKimlik?.isim
          ? this.personel.personelKimlik?.isim
          : '',
        [Validators.required]
      ),
      KimlikSeriNo: new FormControl(
        this.personel.personelKimlik?.seriNo
          ? this.personel.personelKimlik?.seriNo
          : '',
        [Validators.required]
      ),
      KimlikSoyad: new FormControl(
        this.personel.personelKimlik?.soyad
          ? this.personel.personelKimlik?.soyad
          : '',
        [Validators.required]
      ),
      KimlikTc: new FormControl(
        this.personel.personelKimlik?.tc
          ? this.personel.personelKimlik?.tc
          : '',
        [Validators.required]
      ),
      //Adres
      AdresUlke: new FormControl(
        this.personel.personelAdres?.ulke
          ? this.personel.personelAdres?.ulke
          : '',
        [Validators.required]
      ),
      AdresIl: new FormControl(
        this.personel.personelAdres?.il ? this.personel.personelAdres?.il : '',
        [Validators.required]
      ),
      AdresIlce: new FormControl(
        this.personel.personelAdres?.ilce
          ? this.personel.personelAdres?.ilce
          : '',
        [Validators.required]
      ),
      AdresMahalle: new FormControl(
        this.personel.personelAdres?.mahalle
          ? this.personel.personelAdres?.mahalle
          : '',
        [Validators.required]
      ),
      AdresPostaKodu: new FormControl(
        this.personel.personelAdres?.postaKodu
          ? this.personel.personelAdres?.postaKodu
          : 0,
        [Validators.required]
      ),
      AdresSokak: new FormControl(
        this.personel.personelAdres?.sokak
          ? this.personel.personelAdres?.sokak
          : '',
        [Validators.required]
      ),
      AdresAcikAdres: new FormControl(
        this.personel.personelAdres?.acikAdres
          ? this.personel.personelAdres?.acikAdres
          : '',
        [Validators.required]
      ),
      //Eğitim
      EgitimDurumu: new FormControl(
        this.personel.personelEgitim?.egitimDurumu
          ? this.personel.personelEgitim?.egitimDurumu
          : ''
      ),
      EgitimBolum: new FormControl(
        this.personel.personelEgitim?.bolum
          ? this.personel.personelEgitim?.bolum
          : ''
      ),
      EgitimLisansDerecesi: new FormControl(
        this.personel.personelEgitim?.lisansDerecesi
          ? this.personel.personelEgitim?.lisansDerecesi
          : ''
      ),
      EgitimDoktora: new FormControl(
        this.personel.personelEgitim?.doktora
          ? this.personel.personelEgitim?.doktora
          : ''
      ),
      EgitimIlkOkul: new FormControl(
        this.personel.personelEgitim?.ilkOkul
          ? this.personel.personelEgitim?.ilkOkul
          : ''
      ),
      EgitimLise: new FormControl(
        this.personel.personelEgitim?.lise
          ? this.personel.personelEgitim?.lise
          : ''
      ),
      EgitimNotOratalamasi: new FormControl(
        this.personel.personelEgitim?.notOrtalamasi
          ? this.personel.personelEgitim?.notOrtalamasi
          : 0
      ),
      EgitimOrtaOkul: new FormControl(
        this.personel.personelEgitim?.ortaOkul
          ? this.personel.personelEgitim?.ortaOkul
          : ''
      ),
      EgitimUnuversite: new FormControl(
        this.personel.personelEgitim?.unuversite
          ? this.personel.personelEgitim?.unuversite
          : ''
      ),
      EgitimYuksekLisans: new FormControl(
        this.personel.personelEgitim?.yuksekLisans
          ? this.personel.personelEgitim?.yuksekLisans
          : ''
      ),
      //Sigorta
      SigortaBrutUcret: new FormControl(
        this.personel.personelSigorta?.brutUcret
          ? this.personel.personelSigorta?.brutUcret
          : '',
        [Validators.required]
      ),
      SigortaVergiOrani: new FormControl(
        this.personel.personelSigorta?.VergiOrani
          ? this.personel.personelSigorta?.VergiOrani
          : '',
        [Validators.required]
      ),
      SigortaCikisNedeni: new FormControl(
        this.personel.personelSigorta?.cikisNedeni
          ? this.personel.personelSigorta?.cikisNedeni
          : ''
      ),
      SigortaCikisTarihi: new FormControl(
        this.personel.personelSigorta?.cikisTarihi
          ? this.personel.personelSigorta?.cikisTarihi
          : Date
      ),
      SigortaGirisTarihi: new FormControl(
        this.personel.personelSigorta?.girisTarihi
          ? this.personel.personelSigorta?.girisTarihi
          : Date,
        [Validators.required]
      ),
      SigortaMeslekKodu: new FormControl(
        this.personel.personelSigorta?.meslekKodu
          ? this.personel.personelSigorta?.meslekKodu
          : '',
        [Validators.required]
      ),
      SigortaSicilNo: new FormControl(
        this.personel.personelSigorta?.sicilNo
          ? this.personel.personelSigorta?.sicilNo
          : '',
        [Validators.required]
      ),
      SigortaSigortaStatu: new FormControl(
        this.personel.personelSigorta?.SigortaStatu
          ? this.personel.personelSigorta?.SigortaStatu
          : '',
        [Validators.required]
      ),
      SigortaCalismaTipi: new FormControl(
        this.personel.personelSigorta?.calismaTipi
          ? this.personel.personelSigorta?.calismaTipi
          : '',
        [Validators.required]
      ),
      SigortaCalisanTipi: new FormControl(
        this.personel.personelSigorta?.calisanTipi
          ? this.personel.personelSigorta?.calisanTipi
          : '',
        [Validators.required]
      ),
      ciktimi: new FormControl(
        this.personel.personelSigorta?.ciktimi
          ? this.personel.personelSigorta?.ciktimi
          : false
      ),
      //İletisim
      iletisimEmail: new FormControl(
        this.personel.personeliletisim?.email
          ? this.personel.personeliletisim?.email
          : '',
        [Validators.required]
      ),
      iletisimTelefon: new FormControl(
        this.personel.personeliletisim?.telefon
          ? this.personel.personeliletisim?.telefon
          : '',
        [Validators.required]
      ),
      iletisimEvTelefonu: new FormControl(
        this.personel.personeliletisim?.evTelefonu
          ? this.personel.personeliletisim?.evTelefonu
          : ''
      ),
      //Sirket
      sirketSube: new FormControl(
        this.personel.personelSirket?.SubeId
          ? this.personel.personelSirket?.SubeId
          : '',
        [Validators.required]
      ),
      sirketDepartman: new FormControl(
        this.personel.personelSirket?.departmanId
          ? this.personel.personelSirket?.departmanId
          : '',
        [Validators.required]
      ),
      sirketDepartmanRol: new FormControl(
        this.personel.personelSirket?.departmanRoleId
          ? this.personel.personelSirket?.departmanRoleId
          : '',
        [Validators.required]
      ),
      sirketIsTanimi: new FormControl(
        this.personel.personelSirket?.isTanimi
          ? this.personel.personelSirket?.isTanimi
          : ''
      ),
      //banka
      bankaAdi: new FormControl(
        this.personel.personelBanka?.bankaAdi
          ? this.personel.personelBanka.bankaAdi
          : '',
        [Validators.required]
      ),
      bankaIban: new FormControl(
        this.personel.personelBanka?.iban
          ? this.personel.personelBanka.iban
          : '',
        [Validators.required]
      ),
      hesapNo: new FormControl(
        this.personel.personelBanka?.hesapNo
          ? this.personel.personelBanka.hesapNo
          : '',
        [Validators.required]
      ),
    });
  }
  editButton(e: Personel) {
    this.personel = e;
    this.PersonelDialog = true;
    this.saveVsUpdatePersonel = false;
    this.createForm();
    e.personelDeneyim?.map((m) => {
      this.DeneyimListe.push(m);
    });
    this.personel = {};
  }
  addPersonelButton() {
    this.saveVsUpdatePersonel = true;
    this.PersonelDialog = true;
    this.personel = {};
  }
  save() {
    if (this.saveVsUpdatePersonel) {
      this.personel = <Personel>{
        personelAdres: <PersonelAdres>{
          acikAdres: this.PersonelForm.value.AdresAcikAdres,
          il: this.PersonelForm.value.AdresIl.text,
          ilce: this.PersonelForm.value.AdresIlce.text,
          mahalle: this.PersonelForm.value.AdresMahalle,
          postaKodu: this.PersonelForm.value.AdresPostaKodu,
          sokak: this.PersonelForm.value.AdresSokak,
          ulke: this.PersonelForm.value.AdresUlke.text,
        },
        personelEgitim: <PersonelEgitim>{
          bolum: this.PersonelForm.value.EgitimBolum.text,
          doktora: this.PersonelForm.value.EgitimDoktora,
          egitimDurumu: this.PersonelForm.value.EgitimDurumu.text,
          ilkOkul: this.PersonelForm.value.EgitimIlkOkul,
          lisansDerecesi: this.PersonelForm.value.EgitimLisansDerecesi.text,
          lise: this.PersonelForm.value.EgitimLise,
          notOrtalamasi: this.PersonelForm.value.EgitimNotOratalamasi,
          ortaOkul: this.PersonelForm.value.EgitimOrtaOkul,
          unuversite: this.PersonelForm.value.EgitimUnuversite,
          yuksekLisans: this.PersonelForm.value.EgitimYuksekLisans,
        },
        personelKimlik: <PersonelKimlik>{
          cinsiyet: this.PersonelForm.value.KimlikCinsiyet.text,
          dogumTarihi: this.PersonelForm.value.KimlikDogumTarihi,
          dogumYeri: this.PersonelForm.value.KimlikDogumYeri.text,
          isim: this.PersonelForm.value.KimlikIsim,
          kanGrubu: this.PersonelForm.value.KimlikKanGrubu.text,
          medeniHal: this.PersonelForm.value.KimlikMedeniHal.text,
          cocukSayisi: this.PersonelForm.value.KimlikCocukSayisi,
          seriNo: this.PersonelForm.value.KimlikSeriNo,
          soyad: this.PersonelForm.value.KimlikSoyad,
          tc: this.PersonelForm.value.KimlikTc,
          uyruk: this.PersonelForm.value.KimlikUyruk.text,
        },
        personelSigorta: <PersonelSigorta>{
          calismaTipi: this.PersonelForm.value.SigortaCalismaTipi.text,
          calisanTipi: this.PersonelForm.value.SigortaCalisanTipi.text,
          cikisNedeni: this.PersonelForm.value.SigortaCikisNedeni,
          cikisTarihi: this.PersonelForm.value.SigortaCikisTarihi,
          ciktimi: this.PersonelForm.value.ciktimi,
          girisTarihi: this.PersonelForm.value.SigortaGirisTarihi,
          meslekKodu: this.PersonelForm.value.SigortaMeslekKodu,
          sicilNo: this.PersonelForm.value.SigortaSicilNo,
          SigortaStatu: this.PersonelForm.value.SigortaSigortaStatu,
        },
        personeliletisim: <Personeliletisim>{
          email: this.PersonelForm.value.iletisimEmail,
          evTelefonu: this.PersonelForm.value.iletisimEvTelefonu,
          telefon: this.PersonelForm.value.iletisimTelefon,
        },
        personelBanka: <PersonelBanka>{
          bankaAdi: this.PersonelForm.value.bankaAdi.text,
          iban: this.PersonelForm.value.bankaIban,
          hesapNo: this.PersonelForm.value.hesapNo,
        },
        personelSirket: <PersonelSirket>{
          departmanId: this.PersonelForm.value.sirketDepartman.id,
          SubeId: this.PersonelForm.value.sirketSube.id,
          departmanRoleId: this.PersonelForm.value.sirketDepartmanRol.id,
          isTanimi: this.PersonelForm.value.sirketIsTanimi,
        },
        personelDeneyim: this.DeneyimListe,
      };
      this.personelService.savePersonel(this.personel);
    } else {
      let id = this.personel.id;
      this.personel = <Personel>{
        personelAdres: <PersonelAdres>{
          id: id,
          acikAdres: this.PersonelForm.value.AdresAcikAdres,
          il: this.PersonelForm.value.AdresIl.text,
          ilce: this.PersonelForm.value.AdresIlce.text,
          mahalle: this.PersonelForm.value.AdresMahalle,
          postaKodu: this.PersonelForm.value.AdresPostaKodu,
          sokak: this.PersonelForm.value.AdresSokak,
          ulke: this.PersonelForm.value.AdresUlke.text,
        },
        personelEgitim: <PersonelEgitim>{
          id: id,
          bolum: this.PersonelForm.value.EgitimBolum.text,
          doktora: this.PersonelForm.value.EgitimDoktora,
          egitimDurumu: this.PersonelForm.value.EgitimDurumu.text,
          ilkOkul: this.PersonelForm.value.EgitimIlkOkul,
          lisansDerecesi: this.PersonelForm.value.EgitimLisansDerecesi.text,
          lise: this.PersonelForm.value.EgitimLise,
          notOrtalamasi: this.PersonelForm.value.EgitimNotOratalamasi,
          ortaOkul: this.PersonelForm.value.EgitimOrtaOkul,
          unuversite: this.PersonelForm.value.EgitimUnuversite,
          yuksekLisans: this.PersonelForm.value.EgitimYuksekLisans,
        },
        personelKimlik: <PersonelKimlik>{
          id: id,
          cinsiyet: this.PersonelForm.value.KimlikCinsiyet.text,
          dogumTarihi: this.PersonelForm.value.KimlikDogumTarihi,
          dogumYeri: this.PersonelForm.value.KimlikDogumYeri.text,
          isim: this.PersonelForm.value.KimlikIsim,
          kanGrubu: this.PersonelForm.value.KimlikKanGrubu.text,
          medeniHal: this.PersonelForm.value.KimlikMedeniHal.text,
          cocukSayisi: this.PersonelForm.value.KimlikCocukSayisi,
          seriNo: this.PersonelForm.value.KimlikSeriNo,
          soyad: this.PersonelForm.value.KimlikSoyad,
          tc: this.PersonelForm.value.KimlikTc,
          uyruk: this.PersonelForm.value.KimlikUyruk.text,
        },
        personelSigorta: <PersonelSigorta>{
          id: id,
          brutUcret: this.PersonelForm.value.SigortaBrutUcret,
          calismaTipi: this.PersonelForm.value.SigortaCalismaTipi.text,
          cikisNedeni: this.PersonelForm.value.SigortaCikisNedeni,
          cikisTarihi: this.PersonelForm.value.SigortaCikisTarihi,
          ciktimi: this.PersonelForm.value.ciktimi,
          girisTarihi: this.PersonelForm.value.SigortaGirisTarihi,
          meslekKodu: this.PersonelForm.value.SigortaMeslekKodu,
          netUcret: this.PersonelForm.value.SigortaNetUcret,
          sicilNo: this.PersonelForm.value.SigortaSicilNo,
          SigortaStatu: this.PersonelForm.value.SigortaSigortaStatu,
        },
        personeliletisim: <Personeliletisim>{
          id: id,
          email: this.PersonelForm.value.iletisimEmail,
          evTelefonu: this.PersonelForm.value.iletisimEvTelefonu,
          telefon: this.PersonelForm.value.iletisimTelefon,
        },
        personelBanka: <PersonelBanka>{
          id: id,
          bankaAdi: this.PersonelForm.value.bankaAdi.text,
          iban: this.PersonelForm.value.bankaIban,
          hesapNo: this.PersonelForm.value.hesapNo,
        },
        personelSirket: <PersonelSirket>{
          id: id,
          departmanId: this.PersonelForm.value.sirketDepartman.id,
          SubeId: this.PersonelForm.value.sirketSube.id,
          departmanRoleId: this.PersonelForm.value.sirketDepartmanRol.id,
          isTanimi: this.PersonelForm.value.sirketIsTanimi,
        },
        personelDeneyim: this.DeneyimListe,
        id: id,
      };
      this.personelService.updatePersonel(this.personel);
    }
  }
  //deneyim
  addDeneyimButton() {
    this.DeneyimForm.reset();
    this.saveVsUpdateDeneyim = false;
    this.DeneyimDialog = true;
  }
  DeleteDeneyim(e: any) {
    this.confirmationService.confirm({
      message: 'Bu Deneyimi silmek istiyormusunuz',
      header: 'Silinsinmi',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.DeneyimListe.forEach((element, index) => {
          if (element == e) {
            this.DeneyimListe.splice(index, 1);
          }
        });
      },
    });
  }
  DeneyimSave() {
    if (this.saveVsUpdateDeneyim && this.deneyim) {
      this.DeneyimListe.forEach((element, index) => {
        if (element == this.deneyim) {
          this.DeneyimListe.splice(index, 1);
        }
      });
      this.deneyim = <PersonelDeneyim>{
        pozisyon: this.DeneyimForm.value.pozisyon,
        sirketIsmi: this.DeneyimForm.value.sirketIsmi,
        yil: this.DeneyimForm.value.yil,
        id: 0,
        isActive: true,
      };
      this.DeneyimListe.push(this.deneyim);
    } else {
      this.deneyim = <PersonelDeneyim>{
        pozisyon: this.DeneyimForm.value.pozisyon,
        sirketIsmi: this.DeneyimForm.value.sirketIsmi,
        yil: this.DeneyimForm.value.yil,
        id: 0,
        isActive: false,
      };
      this.DeneyimListe.push(this.deneyim);
    }
  }
}
