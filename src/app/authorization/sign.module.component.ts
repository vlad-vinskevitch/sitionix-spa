import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { TypeSign } from './type/TypeSign';
import { ICastomForm } from './interface/ICastomForm';

@Component({
  selector: 'sign-module-component',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormlyMaterialModule,
  ],
  template: `
    <div [className]="'sign-module-forma'">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <formly-form
          [form]="form"
          [fields]="auditForm.field"
          [model]="auditForm.model"
          [options]="options"
        ></formly-form>
        <button
          mat-raised-button
          color="primary"
          type="submit"
          [disabled]="form.invalid"
        >
          {{ auditForm.type || 'Submit' }}
        </button>
      </form>
    </div>
  `,
  styleUrls: ['./styles/auth.component.scss'],
})
export class SignModuleComponent implements OnChanges {
  @Input() typeForm: TypeSign = 'Sign in';
  form = new FormGroup({});
  options = {};

  singInForm: ICastomForm = {
    type: 'Sign in',
    model: {
      email: '',
      password: '',
    },
    field: [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          placeholder: 'Введіть ваш email',
          required: true,
          type: 'email',
        },
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Пароль',
          placeholder: 'Введіть ваш пароль',
          required: true,
          type: 'password',
          minLength: 6,
        },
      },
    ],
  };

  singUpForm: ICastomForm = {
    type: 'Sign up',
    model: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    field: [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email',
          placeholder: 'Введіть ваш email',
          required: true,
          type: 'email',
        },
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Пароль',
          placeholder: 'Введіть ваш пароль',
          required: true,
          type: 'password',
          minLength: 6,
        },
      },
      {
        key: 'repeatPassword',
        type: 'input',
        templateOptions: {
          label: 'Повторіть пароль',
          placeholder: 'Повторно введіть ваш пароль',
          required: true,
          type: 'password',
        },
        validators: {
          fieldMatch: {
            expression: async (control: FormGroup) =>
              (await control.get('password')?.value) === (await control.get('repeatPassword')?.value),
            message: 'Паролі не збігаються',
          },
        },
      },
    ],
  };

  auditForm = this.typeForm ? this.singInForm : this.singUpForm;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['typeForm']) {
      this.auditType();
    }
  }

  auditType() {
    switch (this.typeForm) {
      case 'Sign in':
        this.auditForm = this.singInForm;
        break;
      case 'Sign up':
        this.auditForm = this.singUpForm;
        break;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form);
    }
  }
}