import { Component } from '@angular/core';
import { PearlWidget } from '@pearl.com/pearl-widget-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PearlWidget],
  template: `
    <h1>Pearl Chat Widget Example</h1>
    <div class="widget">
      <pearl-widget
        [accessKey]="'YOUR_PEARL_ACCESS_KEY'"
        [mode]="'pearl-ai'"
      ></pearl-widget>
    </div>
  `,
  styles: `
    .widget {
      width: 800px;
      height:600px;
    }
  `,
})
export class App {}
