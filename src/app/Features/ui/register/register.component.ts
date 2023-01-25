import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Core/Interface/User/user';
import { UserService } from 'src/app/Core/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  public UserForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      adSoyad: new FormControl('', [Validators.required]),
      kullaniciAdi: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      sifre: new FormControl('', [Validators.required]),
      sifreTekrar: new FormControl('', [Validators.required]),
    });
  }

  save() {
    this.user.Email = this.UserForm.value.email;
    this.user.Password = this.UserForm.value.sifre;
    this.user.PasswordConfirm = this.UserForm.value.sifreTekrar;
    this.user.Username = this.UserForm.value.kullaniciAdi;
    this.user.NameSurname = this.UserForm.value.adSoyad;
    this.userService.CreateUser(this.user);
    this.router.navigate(['login']);
  }
}
