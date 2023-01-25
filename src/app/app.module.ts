import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from './admin/layout/app.layout.module';
import { ServicesModule } from './Services/services.module';
import { JwtModule } from '@auth0/angular-jwt';
import { PrimengModule } from './base/module/primeng.module';
import { UiModule } from './ui/ui.module';
import { PersonelModule } from './admin/Personel/personel.module';
import { SubeModule } from './admin/sube/sube.module';
import { DepartmanModule } from './admin/departman/departman.module';
import { DepartmanRolModule } from './admin/departman-rol/departman-rol.module';
import { HomeModule } from './admin/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AppLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    //module
    PrimengModule,
    UiModule,
    PersonelModule,
    SubeModule,
    DepartmanModule,
    DepartmanRolModule,
    HomeModule,
    ServicesModule,
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
