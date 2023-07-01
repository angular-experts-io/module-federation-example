import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'angular-experts-remote-entry-b-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: ` <header class="shadow-lg">
      <div class="container mx-auto">
        <div class="flex items-center gap-8 py-2">
          <a href="https://angularexperts.io" target="_blank">
            <img
              class="h-16"
              src="assets/angular-experts.png"
              alt="Angular Experts"
            />
          </a>
          <span class="text-blue-700 text-2xl font-bold"
            >Remote B showcase</span
          >
        </div>
      </div>
    </header>
    <main class="flex-1 pt-8">
      <div class="container mx-auto">
        <router-outlet />
      </div>
    </main>`,
  styles: [
    `
      :host {
        @apply flex flex-col h-screen;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
