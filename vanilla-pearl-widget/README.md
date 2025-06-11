# vanilla-pearl-widget

Vanilla JavaScript library to embed the **Pearl Widget** iframe in your web application. Initialize the widget with an access key and mode for interactive chat or expert systems powered by Pearl.

## ✨ Features

- Embeds a secure iframe widget from Pearl
- Configurable via `accessKey` and `mode`
- Initializes via `postMessage` on iframe load
- Simple integration into any HTML page

By default chat starts in pearl-ai mode. To enable other mods you need to obtain `apiKey` [here](https://www.pearl.com/contact).

## 📦 Installation

Include `pearl-widget.global.js` in your HTML, or install via npm:

```bash
npm install pearl-vanilla-widget
```

### Import

```js
// ES Module
import { insertPearlWidget } from 'pearl-vanilla-widget';

// CommonJS
const { insertPearlWidget } = require('pearl-vanilla-widget');
```

## 🚀 Usage

Add a container to your HTML:

```html
<div id="pearl-widget-container" style="width: 800px; height: 600px;"></div>
```

Then insert the widget:

```js
document.addEventListener('DOMContentLoaded', function() {
  insertPearlWidget('#pearl-widget-container', {
    accessKey: 'your-access-key', // Optional
    mode: 'pearl-ai'              // Optional
  });
});
```

## 🔧 Inputs

The `insertPearlWidget` function accepts a configuration object with the following optional properties:

| Property    | Type     | Description                                                                                         |
| ----------- | -------- | --------------------------------------------------------------------------------------------------- |
| `accessKey` | `string` | Optional. The key used to authenticate the widget session.                                      |
| `mode`      | `string` | Optional. Used only with **accessKey**. One of the available modes: `expert`, `pearl-ai`, `pearl-ai-verified`, `pearl-ai-expert`. |

## 🧪 Development

To build the package locally (if you set up a build process, e.g., for minification or module bundling):

```bash
npm run build
```

## 📄 License

MIT
