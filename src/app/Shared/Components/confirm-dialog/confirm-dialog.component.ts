import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../module/primeng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, PrimengModule],
})
export class ConfirmDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
