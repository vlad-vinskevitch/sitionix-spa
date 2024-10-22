import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface ICustomFormField extends FormlyFieldConfig {
  key: string; // Unique key for each field, used to bind the field to the form model.
  type: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | string; // Type of the field
  templateOptions: {
    label: string; // Label displayed for the field.
    placeholder?: string; // Placeholder text for the input field.
    description?: string; // Additional description displayed under the field.
    required?: boolean; // Marks the field as required.
    minLength?: number; // Minimum length for input value.
    maxLength?: number; // Maximum length for input value.
    min?: number; // Minimum numeric value (for number fields).
    max?: number; // Maximum numeric value (for number fields).
    options?: { value: string | number; label: string }[]; // Options for select, radio, or checkbox fields.
    disabled?: boolean; // Whether the field is disabled.
    type?: string;
  };
  validators?: any;
  asyncValidators?: any; // Asynchronous validators for the field.
  hideExpression?: boolean | string | (() => boolean); // Expression or function to conditionally hide the field.
  fieldGroup?: ICustomFormField[]; // Nested group of fields, for creating sections or complex forms.
  className?: string; // CSS class for styling the field.
}

