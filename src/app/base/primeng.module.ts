import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    DialogModule,
    TabMenuModule,
    StepsModule,
    ToastModule,
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
    ConfirmPopupModule,
  ],
  exports: [
    ToolbarModule,
    DialogModule,
    TabMenuModule,
    StepsModule,
    ToastModule,
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
    ConfirmPopupModule,
  ],
})
export class PrimengModule {}
