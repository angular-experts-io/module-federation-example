import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angular-experts-shared-ui-dummy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'shared-ui-dummy.component.html',
  styles: [
    `
      :host {
        display: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedUiDummyComponent {}
