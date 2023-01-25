import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmanRolComponent } from './departman-rol.component';
import { DepartmanRolRoutingModule } from './departman-rol-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/Shared/base/module/primeng.module';

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
