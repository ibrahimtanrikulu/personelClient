import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TazminatHesaplaComponent } from './tazminat-hesapla/tazminat-hesapla.component';
import { PersonelMaasComponent } from './personel-maas/personel-maas.component';
import { PersonelIstifaComponent } from './personel-istifa/personel-istifa.component';
import { PersonelMesaiComponent } from './personel-mesai/personel-mesai.component';
import { PersonellerComponent } from './personeller/personeller.component';
import { PersonelizinleriComponent } from './personelizinleri/personelizinleri.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonelRoutingModule } from './personel-routing.module';
import { PrimengModule } from 'src/app/Shared/module/primeng.module';
import { DialogComponent } from 'src/app/Shared/Components/dialog/dialog.component';

@NgModule({
  declarations: [
    TazminatHesaplaComponent,
    PersonelMaasComponent,
    PersonelIstifaComponent,
    PersonelMesaiComponent,
    PersonellerComponent,
    PersonelizinleriComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
    PersonelRoutingModule,
  ],
})
export class PersonelModule {}
