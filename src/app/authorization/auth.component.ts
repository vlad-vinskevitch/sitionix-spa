import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SignModuleComponent } from './sign.module.component';

@Component({
  selector: 'auth-component',
  standalone: true,
  imports: [
    MatTabsModule,
    SignModuleComponent,
  ],
  template: `
    <div class="auth-container">
      <mat-tab-group dynamicHeight>
        <mat-tab label="Авторизація">
          <sign-module-component [typeForm]="'Sign in'" />
        </mat-tab>
        <mat-tab label="Реєстрація">
          <sign-module-component [typeForm]="'Sign up'" />
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styleUrls: ['./styles/auth.component.scss'],
})
export class AuthComponent {}
