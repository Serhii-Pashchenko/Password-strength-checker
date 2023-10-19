import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthCheckerComponent } from './password-strength-checker.component';

@NgModule({
  declarations: [PasswordStrengthCheckerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [PasswordStrengthCheckerComponent],
})
export class PasswordStrengthCheckerModule {}
