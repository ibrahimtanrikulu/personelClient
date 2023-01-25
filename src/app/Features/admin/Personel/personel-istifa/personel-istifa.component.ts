import { Component, OnInit } from '@angular/core';
import { PersonelService } from 'src/app/Core/Services/Personel/personel.service';
import { PersonelIstifa } from 'src/app/Core/model/Personel/personelIstifa';

@Component({
  selector: 'app-personel-istifa',
  templateUrl: './personel-istifa.component.html',
  styleUrls: ['./personel-istifa.component.scss'],
})
export class PersonelIstifaComponent implements OnInit {
  TabloData: PersonelIstifa[] = [];
  constructor(private personelService: PersonelService) {
    personelService.getFilterList().subscribe((s) => (this.TabloData = s));
  }
  ngOnInit(): void {}
}
