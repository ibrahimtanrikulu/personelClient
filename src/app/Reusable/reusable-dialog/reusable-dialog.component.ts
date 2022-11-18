import { Component, Inject, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-reusable-dialog',
  templateUrl: './reusable-dialog.component.html',
  styleUrls: ['./reusable-dialog.component.scss'],
  providers: [ConfirmationService],
})
export class ReusableDialogComponent {
  constructor(private confirmationService: ConfirmationService) {}

  confirm1() {
    this.confirmationService.confirm({
      message: 'Deneme?',
      header: 'test',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {},
    });
  }
}
