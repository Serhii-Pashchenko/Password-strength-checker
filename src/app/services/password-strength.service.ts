import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string {
    if (password.length === 0) {
      return 'empty';
    } else if (password.length < 8) {
      return 'less';
    } else if (
      /[a-zA-Zа-яА-Я]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      return 'strong';
    } else if (
      (/[a-zA-Zа-яА-Я]/.test(password) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(password)) ||
      (/[a-zA-Zа-яА-Я]/.test(password) && /[0-9]/.test(password)) ||
      (/[0-9]/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password))
    ) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}
