import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../../module/primeng.module';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, 
  ],
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent implements OnInit {
  header: string = '';
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  
}
