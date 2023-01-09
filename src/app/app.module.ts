import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { ImageModule } from 'primeng/image';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from './admin/layout/app.layout.module';
import { ToolbarModule } from 'primeng/toolbar';
import { LoginComponent } from './ui/login/login.component';
import { DepartmanComponent } from './admin/departman/departman.component';
import { ModelModule } from './Services/model.module';
import { RegisterComponent } from './ui/register/register.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastModule } from 'primeng/toast';
import { PersonelMaasComponent } from './admin/Personel/personel-maas/personel-maas.component';
import { JwtModule } from '@auth0/angular-jwt';
import { PersonellerComponent } from './admin/Personel/personeller/personeller.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MatTabsModule } from '@angular/material/tabs';
import { DepartmanRolComponent } from './admin/departman-rol/departman-rol.component';
import { SubeComponent } from './admin/sube/sube.component';
import { PersonelizinleriComponent } from './admin/Personel/personelizinleri/personelizinleri.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PersonelIstifaComponent } from './admin/Personel/personel-istifa/personel-istifa.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { TazminatHesaplaComponent } from './admin/Personel/tazminat-hesapla/tazminat-hesapla.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ConfirmPopupModule,
    ModelModule,
    ReactiveFormsModule,
    ToolbarModule,
    DialogModule,
    MatTabsModule,
    TabMenuModule,
    StepsModule,
    ToastModule,
    NgxFileDropModule,
    PasswordModule,
    ConfirmDialogModule,
    ImageModule,
    DividerModule,
    TabViewModule,
    DynamicDialogModule,
    SplitterModule,
    ButtonModule,
    CardModule,
    InputNumberModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    TableModule,
    MatDatepickerModule,
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    SidebarModule,
    NgxSpinnerModule,
    AccordionModule,
    MenubarModule,
    CalendarModule,
    PanelMenuModule,
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
