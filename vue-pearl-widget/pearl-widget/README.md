# pearl-vue-widget

Vue component to embed the **Pearl Widget** iframe in your web application. Initialize the widget with an access key and mode for interactive chat or expert systems powered by Pearl.

## ✨ Features

- Embeds a secure iframe widget from Pearl
- Configurable via `accessKey` and `mode`
- Initializes via `postMessage` on iframe load
- Simple Vue integration

By default chat starts in pearl-ai mode. To enable other mods you need to obtain `apiKey` [here](https://www.pearl.com/contact).


## 📦 Installation

```bash
npm install pearl-vue-widget
# or
yarn add pearl-vue-widget
```

## 🚀 Usage

```vue
<template>
  <div style="width: 800px; height: 600px;">
    <PearlWidget :accessKey="yourAccessKey" :mode="yourMode" />
  </div>
</template>

<script setup lang="ts">
import { PearlWidget } from 'pearl-vue-widget';
import { ref } from 'vue';

const yourAccessKey = ref('your-actual-access-key');
const yourMode = ref('pearl-ai'); // e.g., 'expert', 'pearl-ai', 'pearl-ai-verified'
</script>
```

## 🛠️ Props

- `accessKey` (String, optional): Your Pearl access key.
- `mode` (String, optional): Widget mode (e.g., `expert`, `pearl-ai`). Required if `accessKey` is provided.

## 🧑‍💻 Development

1. Clone the repository.
2. Install dependencies: `npm install`
3. Build the library: `npm run build`

The distributable files will be in the `dist` folder.
