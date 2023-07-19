import { Component } from '@angular/core';
import { HlmButtonDirective } from '@ng-spartan/ui/button/helm';
import { HlmSpinnerComponent } from '@ng-spartan/ui/spinner/helm';
import { HlmIconComponent } from '@ng-spartan/ui/icon/helm';
import { provideIcons } from '@ng-icons/core';
import { radixChevronRight } from '@ng-icons/radix-icons';

@Component({
  selector: 'spartan-button-icon',
  standalone: true,
  imports: [HlmButtonDirective, HlmSpinnerComponent, HlmIconComponent],
  providers: [provideIcons({ radixChevronRight })],
  template: ` <button hlmBtn size="icon" variant="outline"><hlm-icon size="sm" name="radixChevronRight" /></button> `,
})
export class ButtonIconComponent {}

export const iconCode = `
import { Component } from '@angular/core';
import { HlmButtonDirective } from '@ng-spartan/ui/button/helm';
import { HlmSpinnerComponent } from '@ng-spartan/ui/spinner/helm';
import { HlmIconComponent } from '@ng-spartan/ui/icon/helm';
import { provideIcons } from '@ng-icons/core';
import { radixChevronRight } from '@ng-icons/radix-icons';

@Component({
  selector: 'spartan-button-icon',
  standalone: true,
  imports: [HlmButtonDirective, HlmSpinnerComponent, HlmIconComponent],
  providers: [provideIcons({ radixChevronRight })],
  template: \` <button hlmBtn size="icon" variant="outline"><hlm-icon size='sm' name="radixChevronRight" /></button> \`,
})
export class ButtonIconComponent {}
`;