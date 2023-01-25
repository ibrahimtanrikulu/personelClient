import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubeComponent } from './sube.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubeRoutingModule } from './sube-routing.module';
import { PrimengModule } from 'src/app/Shared/base/module/primeng.module';

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
