import { Component } from '@angular/core';

import { RemoteAFeatureAComponent } from '@angular-experts/remote-a/feature/a';

@Component({
  standalone: true,
  imports: [RemoteAFeatureAComponent],
  selector: 'angular-experts-remote-a-entry',
  template: `<angular-experts-remote-a-feature-a [withRouting]="false" />`,
})
export class RemoteEntryComponent {}
