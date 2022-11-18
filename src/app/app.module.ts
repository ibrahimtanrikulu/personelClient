import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { ModelModule } from './model/model.module';
import { AppLayoutModule } from './admin/layout/app.layout.module';
import { ToolbarModule } from 'primeng/toolbar';
import { LoginComponent } from './admin/login/login.component';
import { RadioComponent } from './Reusable/reusable-radio/radiotablo.component';
import { ReusableTableComponent } from './Reusable/reusable-table/reusable-table.component';
import { KitaplarComponent } from './admin/kitaplar/kitaplar.component';
import { FormReusableComponent } from './Reusable/form-reusable/form-reusable.component';
import { GenericComponent } from './generic/generic.component';
import { KategoriComponent } from './admin/kategori/kategori.component';
import { SatinAlmaComponent } from './admin/SatinAlma/satinAlma.component';
import { ReusableDialogComponent } from './Reusable/reusable-dialog/reusable-dialog.component';
import { KullaniciComponent } from './admin/kullanici/kullanici.component';
import { AnasayfaComponent } from './ekran/anasayfa/anasayfa.component';
import { NavbarComponent } from './ekran/navbar/navbar.component';
import { FooterComponent } from './ekran/footer/footer.component';
import { RegisterComponent } from './admin/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RadioComponent,
    ReusableTableComponent,
    KitaplarComponent,
    FormReusableComponent,
    GenericComponent,
    KategoriComponent,
    SatinAlmaComponent,
    ReusableDialogComponent,
    KullaniciComponent,
    AnasayfaComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
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
    StepsModule,
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
    CheckboxModule,
    RadioButtonModule,
    DropdownModule,
    SidebarModule,
    AccordionModule,
    MenubarModule,
    CalendarModule,
    PanelMenuModule,
    AppLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
