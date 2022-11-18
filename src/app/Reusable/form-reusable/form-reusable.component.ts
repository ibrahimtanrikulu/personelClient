import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reusable',
  templateUrl: './form-reusable.component.html',
  styleUrls: ['./form-reusable.component.scss'],
})
export class FormReusableComponent implements OnInit {
  @Input()
  formTipleri: any[] = [];

  @Input()
  form!: FormGroup;

  @Input()
  header: string = '';

  @Input()
  RadioButtonData: any[] = [];

  @Output()
  CikisForm = new EventEmitter<FormGroup>();

  @Output()
  kayitEdilsinmi = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ekle() {
    this.kayitEdilsinmi.emit(true);
  }
}
