import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiMfLoaderComponent } from '@angular-experts/shared/ui/mf-loader';

@Component({
  selector: 'angular-experts-host-example-feature-dashboard',
  standalone: true,
  imports: [CommonModule, SharedUiMfLoaderComponent],
  template: `
    <h1 class="text-2xl font-display mt-1">Dashboard (as components)</h1>
    <div class="grid grid-cols-2 gap-8 mt-8">
      <div class="card">
        <angular-experts-shared-ui-mf-loader remoteModuleName="remote-a" />
      </div>
      <div class="card">
        <angular-experts-shared-ui-mf-loader remoteModuleName="remote-b" />
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
export class HostExampleFeatureDashboardComponent {}
