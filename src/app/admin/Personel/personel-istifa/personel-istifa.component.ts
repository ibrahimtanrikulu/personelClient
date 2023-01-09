import { Component, OnInit } from '@angular/core';
import { PersonelIstifa } from 'src/app/model/Personel/personelIstifa';
import { PersonelService } from 'src/app/Services/Personel/personel.service';

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
