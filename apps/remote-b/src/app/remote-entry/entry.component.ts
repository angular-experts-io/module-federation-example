import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RemoteBFeatureBComponent } from '@angular-experts/remote-b/feature/b';

@Component({
  standalone: true,
  imports: [RemoteBFeatureBComponent],
  template: `<angular-experts-remote-b-feature-b />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntryComponent {}
