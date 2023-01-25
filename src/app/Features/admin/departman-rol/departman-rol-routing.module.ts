import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmanRolComponent } from './departman-rol.component';

const routes: Routes = [{ path: '', component: DepartmanRolComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmanRolRoutingModule {}
