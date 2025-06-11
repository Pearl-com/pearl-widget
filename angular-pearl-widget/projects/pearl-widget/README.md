# pearl-widget

An Angular component that embeds the **Pearl Widget** iframe into your application. It allows initialization of the widget with an access key and mode, enabling interactive chat or expert systems powered by Pearl.

## ✨ Features

- Embeds a secure iframe widget from Pearl
- Configurable via `apiKey` and `mode`
- Automatically initializes via `postMessage` on iframe load
- Simple Angular integration

By default chat starts in pearl-ai mode. To enable other mods you need to obtain `apiKey` [here](https://www.pearl.com/contact).

## 📦 Installation

Install the widget package via npm:

```bash
npm install pearl-angular-widget
```

## 🚀 Usage

```html
<pearl-widget
  [apiKey]="'your-access-key'"
  [mode]="'pearl-ai'"
></pearl-widget>
```

## 🔧 Inputs

| Input       | Type     | Description                                                                                         |
| ----------- | -------- | --------------------------------------------------------------------------------------------------- |
| `apiKey` | `string` | Optional. The key used to authenticate the widget session.                                      |
| `mode`      | `string` | Optional. Used only with **apiKey**. One of the available modes: `expert`, `pearl-ai`, `pearl-ai-verified`, `pearl-ai-expert`. |

## 🧪 Development

To build the package locally:

```bash
ng build pearl-widget
```

## 📄 License

MIT

