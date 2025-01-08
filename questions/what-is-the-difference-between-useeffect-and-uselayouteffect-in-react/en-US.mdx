---
title: What is the difference between `useEffect` and `useLayoutEffect` in React?
---

## TL;DR

`useEffect` and `useLayoutEffect` are React hooks used to handle side effects in functional components, but they differ in timing and use cases:

- `useEffect`: Runs asynchronously after the DOM has been painted. It is suitable for tasks like data fetching, subscriptions, or logging.
- `useLayoutEffect`: Runs synchronously after DOM mutations but before the browser paints. Use it for tasks like measuring DOM elements or synchronizing the UI with the DOM.

Code example:

```jsx
import React, { useEffect, useLayoutEffect, useRef } from 'react';

function Example() {
  const ref = useRef();

  useEffect(() => {
    console.log('useEffect: Runs after DOM paint');
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect: Runs before DOM paint');
    console.log('Element width:', ref.current.offsetWidth);
  });

  return <div ref={ref}>Hello</div>;
}
```

---

## What is `useEffect`?

`useEffect` is a React hook used for managing side effects in functional components. Side effects include operations like fetching data, updating a subscription, or interacting with the browser's DOM API.

- It runs asynchronously after the DOM has been updated and painted.
- It does not block the browser from updating the UI.
- By default, it runs after every render, but dependencies can control its execution.

### Code example

```jsx
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    console.log('Component mounted or updated');
    return () => console.log('Cleanup on unmount or dependency change');
  }, []); // Runs only on mount and unmount

  return <div>Hello, World!</div>;
}
```

### Common use cases

- Fetching data from an API
- Setting up subscriptions (e.g., WebSocket connections)
- Logging or analytics tracking
- Adding and removing event listeners

## What is `useLayoutEffect`?

`useLayoutEffect` is a React hook similar to `useEffect`, but it differs in timing. It runs synchronously after DOM mutations and before the browser paints the screen.

- It is suitable for tasks where the DOM needs to be accessed before the paint.
- It can block rendering, so it should be used sparingly.

### Code example

```jsx
import React, { useLayoutEffect, useRef } from 'react';

function Example() {
  const ref = useRef();

  useLayoutEffect(() => {
    console.log('Element dimensions:', ref.current.getBoundingClientRect());
  });

  return <div ref={ref}>Hello</div>;
}
```

### Common use cases

- Measuring DOM elements (e.g., for animations or layouts)
- Adjusting DOM properties or styles based on calculations
- Fixing UI synchronization issues

## key differences between `useEffect` and `useLayoutEffect`

### Timing

- `useEffect`: Executes after the browser has painted the UI.
- `useLayoutEffect`: Executes before the browser paints, right after DOM changes.

### Blocking behavior

- `useEffect`: Non-blocking, runs asynchronously.
- `useLayoutEffect`: Blocking, runs synchronously.

### Use case examples

- `useEffect`: Fetching data, updating state, or adding event listeners.
- `useLayoutEffect`: Measuring DOM elements, managing animations, or solving layout issues.

## Further reading

- [React Hooks documentation](https://react.dev/reference/react/hooks)
- [React `useEffect` API documentation](https://react.dev/reference/react/useEffect)
- [React `useLayoutEffect` API documentation](https://react.dev/reference/react/useLayoutEffect)
- [Differences between `useEffect` and `useLayoutEffect`](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)
