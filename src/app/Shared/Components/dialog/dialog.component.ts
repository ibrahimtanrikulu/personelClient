import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../module/primeng.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() header: string = '';
  @Input() show: boolean = false;
  @Output() showO = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  save() {
    this.show = false;
    this.showO.emit(this.show);
  }
}
