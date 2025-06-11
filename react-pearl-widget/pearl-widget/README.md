# pearl-react-widget

React component for embedding the **Pearl Widget** iframe in your application. Easily initialize the widget with an access key and mode for interactive chat or expert systems powered by Pearl.

## ✨ Features
- Embeds a secure iframe widget from Pearl
- Configurable via `apiKey` and `mode`
- Initializes via `postMessage` on iframe load
- Simple React integration

By default chat starts in pearl-ai mode. To enable other mods you need to obtain `apiKey` [here](https://www.pearl.com/contact).

## 📦 Installation
```bash
npm install pearl-react-widget
```

## 🚀 Usage
```jsx
import { PearlWidget } from 'pearl-react-widget';

<PearlWidget apiKey="your-access-key" mode="pearl-ai" />
```

## 🛠️ Props
| Prop     | Type     | Description                                                                 |
|----------|----------|-----------------------------------------------------------------------------|
| apiKey   | string   | Optional. Key to authenticate the widget session.                            |
| mode     | string   | Optional. Widget mode: `expert`, `pearl-ai`, `pearl-ai-verified`, `pearl-ai-expert` |

## 🧑‍💻 Development
To build locally:
```bash
npm run build
```

## 📄 License
MIT
