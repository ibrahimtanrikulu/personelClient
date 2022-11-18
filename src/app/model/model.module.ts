import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { GenericService } from "./generic.service";
import { KullaniciService } from "./kullanici.service";
import { KategoriService } from "./kategori.service";
import { KitaplarService } from "./kitaplar.service";
import { SatinAlmaService } from "./SatinAlma.service";


@NgModule({
    imports: [HttpClientModule],
    providers: [GenericService, KategoriService, KullaniciService, KitaplarService, SatinAlmaService]
})
export class ModelModule {

}