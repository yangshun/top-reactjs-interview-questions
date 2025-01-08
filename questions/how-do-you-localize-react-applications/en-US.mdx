---
title: How do you localize React applications?
---

## TL;DR

To localize a React application, you typically use a library like `react-i18next` or `react-intl`. First, you set up your translation files for different languages. Then, you configure the localization library in your React app. Finally, you use the provided hooks or components to display localized text in your components.

```javascript
// Example using react-i18next
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <p>{t('welcome_message')}</p>;
};
```

---

## Setting up localization in React

### Choosing a localization library

There are several libraries available for localizing React applications, with `react-i18next` and `react-intl` being among the most popular. For this guide, we'll focus on `react-i18next`.

### Installing the library

First, install the necessary packages:

```bash
npm install i18next react-i18next
```

### Setting up translation files

Create JSON files for each language you want to support. For example, create `en.json` and `fr.json` in a `locales` directory:

```json
// locales/en.json
{
  "welcome_message": "Welcome to our application!"
}
```

```json
// locales/fr.json
{
  "welcome_message": "Bienvenue dans notre application!"
}
```

### Configuring the localization library

Set up `i18next` and `react-i18next` in your application. Create an `i18n.js` file for the configuration:

```javascript
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
```

### Integrating with your React application

Wrap your application with the `I18nextProvider` and import the `i18n` configuration:

```javascript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root'),
);
```

### Using translations in components

Use the `useTranslation` hook to access the `t` function for translating text:

```javascript
// MyComponent.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <p>{t('welcome_message')}</p>;
};

export default MyComponent;
```

### Switching languages

To switch languages, use the `i18n.changeLanguage` method:

```javascript
// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;
```

## Further reading

- [react-i18next documentation](https://react.i18next.com/)
- [i18next documentation](https://www.i18next.com/)
- [react-intl documentation](https://formatjs.io/docs/react-intl/)
