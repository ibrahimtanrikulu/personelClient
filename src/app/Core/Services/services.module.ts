import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GenericService } from './httpgeneric.service';
import { DepartmanService } from './Departman/departman.service';
import { UserService } from './user.service';
import { PersonelMaasService } from './Personel/personel-maas.service';
import { PersonelService } from './Personel/personel.service';
import { SubeService } from './Sube/sube.service';
import { PersonelMesaiService } from './Personel/personel-mesai.service';
import { PersonelizinService } from './Personel/personelizin.service';
import { DepartmanRolService } from './Departman/departmanRol.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    GenericService,
    DepartmanService,
    UserService,
    PersonelMaasService,
    PersonelService,
    SubeService,
    PersonelMesaiService,
    PersonelizinService,
    DepartmanRolService,
    DepartmanService,
  ],
  declarations: [],
})
export class ServicesModule {}
