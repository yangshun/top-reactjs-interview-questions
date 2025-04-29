---
title: What is `forwardRef()` in React used for?
---

## TL;DR

`forwardRef()` in React is used to pass a ref through a component to one of its child components. This is useful when you need to access a DOM element or a child component's instance directly from a parent component. You wrap your functional component with `forwardRef()` and use the `ref` parameter to forward the ref to the desired child element.

```jsx
import React, { forwardRef } from 'react';

const MyComponent = forwardRef((props, ref) => <input ref={ref} {...props} />);
```

---

## What is `forwardRef()` in React used for?

### Introduction

In React, `forwardRef()` is a higher-order function that allows you to forward a ref through a component to one of its child components. This is particularly useful when you need to access a DOM element or a child component's instance directly from a parent component.

### Why use `forwardRef()`?

There are several scenarios where `forwardRef()` is beneficial:

- **Accessing DOM elements**: When you need to manipulate a DOM element directly, such as focusing an input field.
- **Interacting with child components**: When you need to call methods or access properties of a child component instance.

### How to use `forwardRef()`

To use `forwardRef()`, you wrap your functional component with it and use the `ref` parameter to forward the ref to the desired child element.

#### Example

Here is a simple example demonstrating how to use `forwardRef()`:

```jsx
import React, { forwardRef, useRef } from 'react';

// Define a functional component and wrap it with forwardRef
const MyInput = forwardRef((props, ref) => <input ref={ref} {...props} />);

const ParentComponent = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Access the input element and focus it
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <MyInput ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
```

In this example:

1. `MyInput` is a functional component wrapped with `forwardRef()`.
2. The `ref` parameter is forwarded to the `input` element inside `MyInput`.
3. In `ParentComponent`, a ref (`inputRef`) is created using `useRef()`.
4. The `inputRef` is passed to `MyInput`, allowing the parent component to access the input element directly.
5. The `focusInput` function uses the ref to focus the input element when the button is clicked.

### Important considerations

- **Functional components only**: `forwardRef()` is used with functional components. Class components can directly use refs without `forwardRef()`.
- **Ref forwarding**: Ensure that the ref is forwarded to a DOM element or a class component instance, not another functional component.

## Further reading

- [React documentation on `forwardRef()`](https://react.dev/reference/react/forwardRef)
- [Using the `useRef` Hook](https://react.dev/reference/react/useRef)
- [Refs and the DOM](https://react.dev/learn/manipulating-the-dom-with-refs)
