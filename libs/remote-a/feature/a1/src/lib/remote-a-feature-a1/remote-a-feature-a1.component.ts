import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-experts-remote-a-feature-a1',
  standalone: true,
  imports: [CommonModule],
  template: `<p>remote-a-feature-a1 works!</p>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteAFeatureA1Component {}
