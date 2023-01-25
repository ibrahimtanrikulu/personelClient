import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonellerComponent } from './personeller/personeller.component';
import { PersonelIstifaComponent } from './personel-istifa/personel-istifa.component';
import { PersonelMaasComponent } from './personel-maas/personel-maas.component';
import { PersonelMesaiComponent } from './personel-mesai/personel-mesai.component';
import { PersonelizinleriComponent } from './personelizinleri/personelizinleri.component';
import { TazminatHesaplaComponent } from './tazminat-hesapla/tazminat-hesapla.component';

const routes: Routes = [
  { path: '', component: PersonellerComponent },
  { path: 'personel-istifa', component: PersonelIstifaComponent },
  { path: 'personel-maas', component: PersonelMaasComponent },
  { path: 'personel-mesai', component: PersonelMesaiComponent },
  { path: 'personel-izinleri', component: PersonelizinleriComponent },
  { path: 'personel-tazminat', component: TazminatHesaplaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonelRoutingModule {}
