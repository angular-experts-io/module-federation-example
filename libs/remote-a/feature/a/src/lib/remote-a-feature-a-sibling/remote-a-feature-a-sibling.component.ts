import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'angular-experts-remote-a-feature-a-sibling',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1 class="title">remote-a-sibling-a works!</h1>
    <div class="flex gap-4 my-8">
      <a class="btn" routerLinkActive="btn-active" routerLink="../root">Root</a>
      <a class="btn" routerLinkActive="btn-active" routerLink="../sibling"
        >Sibling</a
      >
      <a class="btn" routerLinkActive="btn-active" routerLink="../root/child"
        >Child</a
      >
    </div>
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
export class RemoteAFeatureASiblingComponent {}
