---
title: What are the rules of React hooks?
---

## TL;DR

React hooks have a few essential rules to ensure they work correctly. Always call hooks at the top level of your React function, never inside loops, conditions, or nested functions. Only call hooks from React function components or custom hooks. These rules ensure that hooks maintain the correct state and lifecycle behavior.

---

## What are the rules of React hooks?

### Always call hooks at the top level

Hooks should always be called at the top level of your React function. This means you should not call hooks inside loops, conditions, or nested functions. This rule ensures that hooks are called in the same order each time a component renders, which is crucial for maintaining the correct state and lifecycle behavior.

```javascript
// Correct
function MyComponent() {
  const [count, setCount] = useState(0);

  if (count > 0) {
    // Do something
  }
}

// Incorrect
function MyComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0); // This will break the rules of hooks
  }
}
```

### Only call hooks from React function components or custom hooks

Hooks should only be called from React function components or custom hooks. This rule ensures that hooks are used in the appropriate context where React can manage their state and lifecycle.

```javascript
// Correct
function MyComponent() {
  const [count, setCount] = useState(0);
  return <div>{count}</div>;
}

// Correct (custom hook)
function useCustomHook() {
  const [state, setState] = useState(null);
  return [state, setState];
}

// Incorrect
function regularFunction() {
  const [count, setCount] = useState(0); // This will break the rules of hooks
}
```

### Use the `eslint-plugin-react-hooks` linter

To enforce these rules, you can use the `eslint-plugin-react-hooks` linter. This plugin will help you identify and fix violations of the rules of hooks in your code.

```bash
npm install eslint-plugin-react-hooks --save-dev
```

Add the plugin to your ESLint configuration:

```json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error", // Checks rules of hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```

## Further reading

- [React hooks documentation](https://react.dev/reference/react/hooks)
- [Rules of hooks](https://react.dev/reference/rules/rules-of-hooks)
- [Using the `eslint-plugin-react-hooks` linter](https://www.npmjs.com/package/eslint-plugin-react-hooks)
