import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubeComponent } from './sube.component';

const routes: Routes = [{ path: '', component: SubeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubeRoutingModule {}
