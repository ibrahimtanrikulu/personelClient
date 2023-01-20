import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from './admin/layout/app.layout.module';
import { LoginComponent } from './ui/login/login.component';
import { DepartmanComponent } from './admin/departman/departman.component';
import { ModelModule } from './Services/model.module';
import { RegisterComponent } from './ui/register/register.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PersonelMaasComponent } from './admin/Personel/personel-maas/personel-maas.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PersonellerComponent } from './admin/Personel/personeller/personeller.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DepartmanRolComponent } from './admin/departman-rol/departman-rol.component';
import { SubeComponent } from './admin/sube/sube.component';
import { PersonelizinleriComponent } from './admin/Personel/personelizinleri/personelizinleri.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PersonelIstifaComponent } from './admin/Personel/personel-istifa/personel-istifa.component';
import { TazminatHesaplaComponent } from './admin/Personel/tazminat-hesapla/tazminat-hesapla.component';
import { PersonelMesaiComponent } from './admin/Personel/personel-mesai/personel-mesai.component';
import { HomeComponent } from './admin/home/home.component';
import { PrimengModule } from './base/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonellerComponent,
    LoginComponent,
    RegisterComponent,
    DepartmanComponent,
    PersonelMaasComponent,
    DepartmanRolComponent,
    SubeComponent,
    PersonelizinleriComponent,
    PersonelIstifaComponent,
    TazminatHesaplaComponent,
    PersonelMesaiComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ModelModule,
    PrimengModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatDatepickerModule,
    NgxSpinnerModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    AppLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('AccessToken'),
        allowedDomains: ['localhost:7176'],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: '_base', useValue: 'https://localhost:7176/api', multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
