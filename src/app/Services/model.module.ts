import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { GenericService } from "./generic.service";
import { DepartmanService } from "./Departman/departman.service";
import { UserService } from "./user.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [GenericService,DepartmanService,UserService],
    declarations: []
})
export class ModelModule {

}