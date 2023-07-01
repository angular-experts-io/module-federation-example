import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-experts-remote-b-feature-b',
  standalone: true,
  imports: [CommonModule],
  template: `<h1 class="title">remote-b-feature-b works!</h1>`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteBFeatureBComponent {}
