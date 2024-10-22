import { FormlyFormOptions } from '@ngx-formly/core';
import { ICastomForm } from '../interface/ICastomForm';

export const singForm: ICastomForm = {
  type: 'Sign in',
  model: { email: '', password: '' },
  options: {} as FormlyFormOptions,
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

export const regist = {};
