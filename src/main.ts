import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PasswordStrengthCheckerModule } from './app/password-strength-checker.module';

platformBrowserDynamic()
  .bootstrapModule(PasswordStrengthCheckerModule)
  .catch((err) => console.error(err));
