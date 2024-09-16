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
  selector: 'regist-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  template: `
    <div class="register-form">
      <h2>Реєстрація</h2>
      <form
        class="form-format"
        [formGroup]="registerForm"
        (ngSubmit)="onRegisterSubmit()"
      >
        <ul>
          <li>
            <mat-form-field appearance="fill">
              <mat-label>Email</mat-label>
              <input
                matInput
                id="registerEmail"
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
                id="registerPassword"
                formControlName="password"
                type="password"
                placeholder="Введіть ваш пароль"
              />
            </mat-form-field>
          </li>
          <button mat-raised-button color="primary" type="submit">
            Зареєструватися
          </button>
        </ul>
      </form>
    </div>
  `,
  styleUrls: ['./regist.component.scss', '../styles/default.styles.ul.scss'],
})
export class RegistComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegisterSubmit(): void {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      console.log('Register Data:', registerData);
      // Додай свою логіку реєстрації тут
    }
  }
}
