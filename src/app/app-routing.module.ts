import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatinAlmaComponent } from './admin/SatinAlma/satinAlma.component';
import { KitaplarComponent } from './admin/kitaplar/kitaplar.component';
import { KullaniciComponent } from './admin/kullanici/kullanici.component';
import { AppLayoutComponent } from './admin/layout/app.layout.component';
import { KategoriComponent } from './admin/kategori/kategori.component';
import { LoginComponent } from './admin/login/login.component';
import { AnasayfaComponent } from './ekran/anasayfa/anasayfa.component';
import { LoginGuard } from './model/login.guard';
import { RegisterComponent } from './admin/register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout',
    component: AppLayoutComponent,
    children: [
      { path: 'kitapListe', component: KitaplarComponent },
      { path: 'kategoriListe', component: KategoriComponent },
      { path: 'kitapKirala', component: SatinAlmaComponent },
      { path: 'kullanicilar', component: KullaniciComponent },
    ],
    canActivate: [LoginGuard],
  },
  {
    path: 'anasayfa',
    component: AnasayfaComponent,
    children: [],
    canActivate: [LoginGuard],
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
