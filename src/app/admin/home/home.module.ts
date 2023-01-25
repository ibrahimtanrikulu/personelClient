import { NgModule } from '@angular/core';
import { PrimengModule } from 'src/app/base/module/primeng.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, PrimengModule],
})
export class HomeModule {}
