# @pearl.com/pearl-widget-react

React component for embedding the **Pearl Widget** iframe in your application. Easily initialize the widget with an access key and mode for interactive chat or expert systems powered by Pearl.

## ✨ Features
- Embeds a secure iframe widget from Pearl
- Configurable via `accessKey` and `mode`
- Initializes via `postMessage` on iframe load
- Simple React integration

To enable all mods you need to obtain `accessKey` [here](https://www.pearl.com/contact).

## 📦 Installation
```bash
npm install @pearl.com/pearl-widget-react
```

## 🚀 Usage
```jsx
import { PearlWidget } from '@pearl.com/pearl-widget-react';

<PearlWidget accessKey="your-access-key" mode="pearl-ai-expert" />
```

## 🛠️ Props
| Prop     | Type     | Description                                                                 |
|----------|----------|-----------------------------------------------------------------------------|
| accessKey   | string   | Optional. Key to authenticate the widget session.                            |
| mode     | string   | Optional. Widget mode: `expert`, `pearl-ai-verified`, `pearl-ai-expert` |

## 🧑‍💻 Development
To build locally:
```bash
npm run build
```

## 📄 License
MIT
