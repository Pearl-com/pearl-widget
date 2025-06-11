export interface PearlWidgetConfig {
  accessKey?: string;
  mode?: 'expert' | 'pearl-ai' | 'pearl-ai-verified' | 'pearl-ai-expert';
}

export function insertPearlWidget(selector: string, config: PearlWidgetConfig = {}): void {
  const container = document.querySelector(selector);
  if (!container) {
    console.error(`PearlWidget: No element found for selector "${selector}"`);
    return;
  }

  const widgetOrigin = 'https://www.pearl.com';
  const { accessKey, mode } = config;

  const iframe = document.createElement('iframe');
  iframe.title = 'Pearl Widget';
  iframe.src = widgetOrigin + '/api/widget';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';

  iframe.onload = () => {
    if (accessKey && mode) {
      iframe.contentWindow?.postMessage(
        {
          type: 'init',
          payload: { accessKey, mode }
        },
        widgetOrigin
      );
    }
  };

  container.appendChild(iframe);
}
