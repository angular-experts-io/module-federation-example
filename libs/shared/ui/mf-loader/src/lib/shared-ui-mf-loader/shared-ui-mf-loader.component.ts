import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@nx/angular/mf';

@Component({
  selector: 'angular-experts-shared-ui-mf-loader',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <ng-container #placeholder></ng-container> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SharedUiMfLoaderComponent implements OnInit, OnChanges {
  @Input({ required: true }) remoteModuleName!: string;
  @Input() remoteModuleEntryName = './Component';
  @Input() remoteModuleEntryComponentName = 'RemoteEntryComponent';

  @ViewChild('placeholder', { static: true, read: ViewContainerRef })
  placeholder!: ViewContainerRef;

  async ngOnInit(): Promise<void> {
    await this.loadAndDisplayRemoteComponent();
  }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (
      Object.values(changes).some((change: SimpleChange) => !change.firstChange)
    ) {
      await this.loadAndDisplayRemoteComponent();
    }
  }

  private async loadAndDisplayRemoteComponent() {
    this.placeholder.clear();
    const component = await loadRemoteModule(
      this.remoteModuleName,
      this.remoteModuleEntryName
    );
    this.placeholder.createComponent(
      component[this.remoteModuleEntryComponentName]
    );
  }
}
