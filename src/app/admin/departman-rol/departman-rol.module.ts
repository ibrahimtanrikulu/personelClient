import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmanRolComponent } from './departman-rol.component';
import { PrimengModule } from 'src/app/base/module/primeng.module';
import { DepartmanRolRoutingModule } from './departman-rol-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DepartmanRolComponent],
  imports: [
    CommonModule,
    PrimengModule,
    DepartmanRolRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DepartmanRolModule {}
