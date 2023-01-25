import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmanComponent } from './departman.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from 'src/app/base/module/primeng.module';
import { DepartmanRoutingModule } from './departman-routing.module';

@NgModule({
  declarations: [DepartmanComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    DepartmanRoutingModule,
  ],
})
export class DepartmanModule {}
