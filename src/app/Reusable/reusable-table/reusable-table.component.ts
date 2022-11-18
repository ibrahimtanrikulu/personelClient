import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.scss'],
})
export class ReusableTableComponent implements OnInit {

  @Input() data: any[] = [];

  @Input() cols: any[] = [];

  @Input() header: string = '';

  @Output() SilEmit: EventEmitter<any> = new EventEmitter();

  @Output() DuzenleEmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  Sil(deger: any) {
    this.SilEmit.emit(deger);
  }

  Duzenle(deger: any) {
    this.DuzenleEmit.emit(deger);
  }
}
