import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-experts-remote-a-feature-a-child',
  standalone: true,
  imports: [CommonModule],
  template: `<p>remote-a-feature-a-child works!</p>`,
  styles: [
    `
      :host {
        display: block;
        padding: 20px 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteAFeatureAChildComponent {}
