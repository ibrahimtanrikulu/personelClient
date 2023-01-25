import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PrimengModule } from 'src/app/Shared/base/module/primeng.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, PrimengModule],
})
export class HomeModule {}
