import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './registration/regist.component';

@Component({
  selector: 'app-auth-switcher',
  standalone: true,
  imports: [MatTabsModule, LoginComponent, RegistComponent],
  template: `
    <div class="auth-container">
      <mat-tab-group>
        <mat-tab label="Авторизація">
          <login-component />
        </mat-tab>
        <mat-tab label="Реєстрація">
          <regist-component />
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styleUrls: ['./auth.component.scss']
})
export class AuthSwitcherComponent {}
