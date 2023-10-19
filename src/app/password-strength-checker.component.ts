import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.scss'],
})
export class PasswordStrengthCheckerComponent {
  title = 'Password strength checker';

  password: string = '';

  getPasswordStrength(): string {
    if (this.password.length === 0) {
      return 'empty';
    } else if (this.password.length < 8) {
      return 'less';
    } else if (
      /[a-zA-Zа-яА-Я]/.test(this.password) &&
      /[0-9]/.test(this.password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(this.password)
    ) {
      return 'strong';
    } else if (
      (/[a-zA-Zа-яА-Я]/.test(this.password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(this.password)) ||
      (/[a-zA-Zа-яА-Я]/.test(this.password) && /[0-9]/.test(this.password)) ||
      (/[0-9]/.test(this.password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(this.password))
    ) {
      return 'medium';
    } else {
      return 'easy';
    }
  }

  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
