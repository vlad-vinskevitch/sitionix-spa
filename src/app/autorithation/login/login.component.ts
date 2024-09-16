import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'login-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ], 
  template: `
    <div class="login-form">
      <h2>Авторизація</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onLoginSubmit()">
        <ul>
          <li>
            <mat-form-field appearance="fill">
              <mat-label>Email</mat-label>
              <input
                matInput
                id="loginEmail"
                formControlName="email"
                type="email"
                placeholder="Введіть ваш email"
              />
            </mat-form-field>
          </li>
          <li>
            <mat-form-field appearance="fill">
              <mat-label>Пароль</mat-label>
              <input
                matInput
                id="loginPassword"
                formControlName="password"
                type="password"
                placeholder="Введіть ваш пароль"
              />
            </mat-form-field>
          </li>
          <button mat-raised-button color="primary" type="submit">
            Увійти
          </button>
        </ul>
      </form>
    </div>
  `,
  styleUrls: ['./login.component.scss', '../styles/default.styles.ul.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLoginSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      console.log('Login Data:', loginData);
      // Додай свою логіку авторизації тут
    }
  }
}
