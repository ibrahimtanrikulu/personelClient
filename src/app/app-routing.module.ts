import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmanRolComponent } from './admin/departman-rol/departman-rol.component';
import { DepartmanComponent } from './admin/departman/departman.component';
import { AppLayoutComponent } from './admin/layout/app.layout.component';
import { PersonelIstifaComponent } from './admin/Personel/personel-istifa/personel-istifa.component';
import { PersonelMaasComponent } from './admin/Personel/personel-maas/personel-maas.component';
import { PersonelizinleriComponent } from './admin/Personel/personelizinleri/personelizinleri.component';
import { PersonellerComponent } from './admin/Personel/personeller/personeller.component';
import { SubeComponent } from './admin/sube/sube.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'personeller',
        component: PersonellerComponent,
      },
      { path: 'personelMaaslari', component: PersonelMaasComponent },
      { path: 'personelizinleri', component: PersonelizinleriComponent },
      { path: 'personelIstifa', component: PersonelIstifaComponent },
      { path: 'departmanlar', component: DepartmanComponent },
      { path: 'departmanRol', component: DepartmanRolComponent },

      { path: 'subeler', component: SubeComponent },
    ],
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
