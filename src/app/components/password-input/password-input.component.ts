import { Component, Input } from '@angular/core';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  @Input() title: string = 'Password strength checker';

  password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  get passwordStrengthClass(): string {
    const passwordStrength = this.passwordStrengthService.getPasswordStrength(
      this.password
    );

    if (passwordStrength === 'strong') {
      return 'strong';
    } else if (passwordStrength === 'medium') {
      return 'medium';
    } else if (passwordStrength === 'easy') {
      return 'easy';
    } else if (passwordStrength === 'less') {
      return 'less';
    } else if (passwordStrength === 'empty') {
      return 'empty';
    } else {
      return '';
    }
  }

  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
