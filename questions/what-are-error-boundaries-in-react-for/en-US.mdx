---
title: What are error boundaries in React for?
---

## TL;DR

Error boundaries in React are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole application. They are implemented using the `componentDidCatch` lifecycle method and the `static getDerivedStateFromError` method. Error boundaries do not catch errors inside event handlers, asynchronous code, or server-side rendering.

---

## What are error boundaries in React for?

### Introduction

Error boundaries are a feature in React that help manage and handle errors in a more graceful way. They allow developers to catch JavaScript errors anywhere in their component tree, log those errors, and display a fallback UI instead of crashing the entire application.

### How to implement error boundaries

To create an error boundary, you need to define a class component that implements either or both of the following lifecycle methods:

- `static getDerivedStateFromError(error)`: This method is used to update the state so the next render will show the fallback UI.
- `componentDidCatch(error, info)`: This method is used to log error information.

Here is an example of an error boundary component:

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Usage

To use the error boundary, wrap it around any component that you want to monitor for errors:

```jsx
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

### Limitations

Error boundaries have some limitations:

- They do not catch errors inside event handlers. For event handlers, you need to use regular JavaScript `try`/`catch` blocks.
- They do not catch errors in asynchronous code (e.g., `setTimeout` or `requestAnimationFrame` callbacks).
- They do not catch errors during server-side rendering.
- They do not catch errors thrown in the error boundary itself.

### Best practices

- Use error boundaries to wrap high-level components such as route handlers or major sections of your application.
- Log errors to an error reporting service to keep track of issues in production.
- Provide a user-friendly fallback UI to improve the user experience when an error occurs.

## Further reading

- [React documentation on error boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
