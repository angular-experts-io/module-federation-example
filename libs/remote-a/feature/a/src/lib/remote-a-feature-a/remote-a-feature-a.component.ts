import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SharedUiDummyComponent } from '@angular-experts/shared/ui/dummy';

@Component({
  selector: 'angular-experts-remote-a-feature-a',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedUiDummyComponent],
  template: `
    <h1 class="title">remote-a-feature-a works!</h1>
    <div class="flex gap-4 my-8" *ngIf="withRouting">
      <a class="btn" routerLinkActive="btn-active" routerLink="../root">Root</a>
      <a class="btn" routerLinkActive="btn-active" routerLink="../sibling"
        >Sibling</a
      >
      <a class="btn" routerLinkActive="btn-active" routerLink="child">Child</a>
    </div>
    <angular-experts-shared-ui-dummy />
    <router-outlet *ngIf="withRouting" />
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteAFeatureAComponent {
  @Input() withRouting = true;
}
