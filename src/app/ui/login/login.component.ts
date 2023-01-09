import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/Interface/User/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  public UserForm!: FormGroup;
  isLoading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      kullaniciAdi: new FormControl('', [Validators.required]),
      sifre: new FormControl('', [Validators.required]),
    });
  }

  result: any;
  giris() {
    this.isLoading = true;
    this.user.Password = this.UserForm.value.sifre;
    this.user.Username = this.UserForm.value.kullaniciAdi;
    this.userService.Login(this.user).subscribe((s) => {
      this.result = s;
    });
    setTimeout(() => {
      if (this.result) {
        localStorage.setItem('AccessToken', this.result.accessToken);
        this.router.navigate(['layout']);
      } else {
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'sifre veya kullanıcı adı yanlış',
        });
      }
    }, 3000);
  }
}
