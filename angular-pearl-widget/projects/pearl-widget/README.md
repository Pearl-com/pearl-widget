# @pearl.com/pearl-widget-angular

An Angular component that embeds the **Pearl Widget** iframe into your application. It allows initialization of the widget with an access key and mode, enabling interactive chat or expert systems powered by Pearl.

## ✨ Features

- Embeds a secure iframe widget from Pearl
- Configurable via `accessKey` and `mode`
- Automatically initializes via `postMessage` on iframe load
- Simple Angular integration

To enable all mods you need to obtain `accessKey` [here](https://www.pearl.com/contact).

## 📦 Installation

Install the widget package via npm:

```bash
npm install @pearl.com/pearl-widget-angular
```

## 🚀 Usage

```html
<pearl-widget
  [accessKey]="'your-access-key'"
  [mode]="'pearl-ai-expert'"
></pearl-widget>
```

## 🔧 Inputs

| Input       | Type     | Description                                                                                         |
| ----------- | -------- | --------------------------------------------------------------------------------------------------- |
| `accessKey` | `string` | Optional. The key used to authenticate the widget session.                                      |
| `mode`      | `string` | Optional. Used only with **accessKey**. One of the available modes: `expert`, `pearl-ai-verified`, `pearl-ai-expert`. |

## 🧪 Development

To build the package locally:

```bash
ng build pearl-widget
```

## 📄 License

MIT

