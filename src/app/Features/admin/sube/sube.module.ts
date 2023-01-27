import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubeComponent } from './sube.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubeRoutingModule } from './sube-routing.module';
import { PrimengModule } from 'src/app/Shared/module/primeng.module';
import { DialogComponent } from 'src/app/Shared/Components/dialog/dialog.component';

@NgModule({
  declarations: [SubeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrimengModule,
    SubeRoutingModule,
    DialogComponent,
  ],
})
export class SubeModule {}
