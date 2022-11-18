import {
  Component, EventEmitter,
  Input, OnInit, Output
} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radiotablo.component.html',
  styleUrls: ['./radiotablo.component.scss']
})
export class RadioComponent implements OnInit {

  SecilenEleman: any;
  @Input() baslik: string = "";
  @Input() data: any;
  @Output() DegisenSecilenEleman: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  gonder() {
    this.DegisenSecilenEleman.emit(this.SecilenEleman);
  }

}