## What is Pearl API?

Pearl API empowers your applications and websites with advanced AI capabilities—plus a unique layer of accuracy and trust by connecting users directly with a global network of over 12,000 real human experts across hundreds of categories. With Pearl, you can:

- Instantly embed conversational AI that answers questions in real time.
- Seamlessly escalate complex or sensitive queries to credentialed professionals in law, medicine, finance, technology, education, and more.
- Offer users a blended experience: AI for speed and scale, human experts for accuracy, nuance, and peace of mind.
- Leverage secure, scalable infrastructure and easy integration for any web platform.

Pearl’s hybrid approach ensures your users always get the best answer—whether from state-of-the-art AI or a verified human expert.

---

# Pearl Widget Monorepo

This repository contains public Pearl API Widget components and usage samples for multiple frameworks:

- **Angular**
- **React**
- **Vue**
- **Vanilla JS**

Each implementation provides a reusable widget component and a sample application demonstrating its usage.

## Quick Embed: Add Pearl AI to Any Website

You can add Pearl AI to your website by simply copying and pasting the following HTML snippet:

```html
<iframe
  src="https://www.pearl.com/api/widget"
  title="Pearl Widget"
  style="width:100%; height:600px; border:none;"
  allow="clipboard-write"
></iframe>
```

Paste this code wherever you want the Pearl Widget to appear. No JavaScript is required for the basic embed.

For advanced configuration (access keys, modes, etc.), see the [Vanilla JS Widget instructions](./vanilla-pearl-widget/README.md).

---

## Repository Structure

```
pearl-widget/
├── angular-pearl-widget/   # Angular component & sample app
├── react-pearl-widget/     # React component & sample app
├── vanilla-pearl-widget/   # Vanilla JS widget & sample HTML
├── vue-pearl-widget/       # Vue component & sample app
```

## Quick Start

Each framework folder contains its own README and setup instructions. See below for details:

- [Angular Widget](./angular-pearl-widget/README.md)
- [React Widget](./react-pearl-widget/pearl-widget/README.md)
- [Vue Widget](./vue-pearl-widget/pearl-widget/README.md)
- [Vanilla JS Widget](./vanilla-pearl-widget/README.md)

## License

MIT
