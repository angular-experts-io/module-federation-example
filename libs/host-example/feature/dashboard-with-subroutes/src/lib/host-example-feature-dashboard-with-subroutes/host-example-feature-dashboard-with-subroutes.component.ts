import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'angular-experts-host-example-feature-dashboard-with-subroutes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex gap-4 items-center mb-8">
      <h1 class="text-2xl font-display">Dashboard (as routes)</h1>
      <a class="btn" [routerLink]="[{ outlets: { left: ['remote-a'] } }]">
        Left / Remote A
      </a>
      <a class="btn" [routerLink]="[{ outlets: { left: ['remote-b'] } }]">
        Left / Remote B
      </a>
      <a class="btn" [routerLink]="[{ outlets: { right: ['remote-a'] } }]">
        Right / Remote A
      </a>
      <a class="btn" [routerLink]="[{ outlets: { right: ['remote-b'] } }]">
        Right / Remote B
      </a>
    </div>
    <router-outlet />
    <div class="grid grid-cols-2 gap-8 mt-8">
      <div class="card">
        <h2 class="text-lg font-display  mb-4">Left outlet</h2>
        <router-outlet name="left" />
      </div>
      <div class="card">
        <h2 class="text-lg font-display mb-4">Right outlet</h2>
        <router-outlet name="right" />
      </div>
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
export class HostExampleFeatureDashboardWithSubroutesComponent {}
