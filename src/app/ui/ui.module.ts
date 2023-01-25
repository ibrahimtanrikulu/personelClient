import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../base/module/primeng.module';
import { CommonModule } from '@angular/common';
import { UiRoutingRoutingModule } from './ui-routing-routing.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    ReactiveFormsModule,
    PrimengModule,
    FormsModule,
    CommonModule,
    UiRoutingRoutingModule
  ],
})
export class UiModule {}
