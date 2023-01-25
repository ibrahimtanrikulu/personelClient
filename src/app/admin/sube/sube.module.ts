import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubeComponent } from './sube.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/base/module/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { SubeRoutingModule } from './sube-routing.module';

@NgModule({
  declarations: [SubeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
    SubeRoutingModule,
  ],
})
export class SubeModule {}
