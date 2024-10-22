import { FormlyFormOptions } from '@ngx-formly/core';
import { ICustomFormField } from './ICustomFormField';
import { TypeSign } from '../type/TypeSign';

export interface ICastomForm {
  type: TypeSign;
  model: { [x: string]: string };
  options?: FormlyFormOptions;
  field: ICustomFormField[];
}
