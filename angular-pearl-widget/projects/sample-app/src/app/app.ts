import { Component } from '@angular/core';
import { PearlWidget } from 'ngx-pearl-widget';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PearlWidget],
  template: `
    <h1>Pearl Chat Widget Example</h1>
    <div class="widget">
      <pearl-widget
        [apiKey]="'YOUR_PEARL_API_KEY'"
        [mode]="'expert'"
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
