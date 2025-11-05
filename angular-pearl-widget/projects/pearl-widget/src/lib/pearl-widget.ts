import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'pearl-widget',
  template: `
    <iframe
      #iframeRef
      title="Pearl Widget"
      [src]="iframeSrc"
      style="width: 100%; height: 100%; border: none;"
    ></iframe>
  `
})
export class PearlWidget implements AfterViewInit {
  @Input() accessKey?: string;
  @Input() mode?: string;

  @ViewChild('iframeRef', { static: true }) iframeRef!: ElementRef<HTMLIFrameElement>;

  widgetOrigin = 'https://www.pearl.com';
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.widgetOrigin}/api/widget`);
  }

  ngAfterViewInit(): void {
    const iframe = this.iframeRef?.nativeElement;
    if (iframe && this.accessKey && this.mode) {
      iframe.addEventListener('load', () => {
        iframe.contentWindow?.postMessage(
          {
            type: 'init',
            payload: {
              accessKey: this.accessKey,
              mode: this.mode,
            },
          },
          this.widgetOrigin
        );
      });
    }
  }
}
