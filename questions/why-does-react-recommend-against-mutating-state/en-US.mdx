---
title: Why does React recommend against mutating state?
---

## TL;DR

React recommends against mutating state because it can lead to unexpected behavior and bugs. React relies on state immutability to efficiently determine when to re-render components. When state is mutated directly, React may not detect the changes, leading to stale or incorrect UI updates. Instead, always create a new state object using methods like `setState` or the `useState` hook.

---

## Why does React recommend against mutating state?

### React's rendering mechanism

React uses a virtual DOM to optimize rendering. When state changes, React compares the new virtual DOM with the previous one to determine the minimal set of changes needed to update the actual DOM. This process is called reconciliation.

### Immutability and state comparison

React relies on immutability to efficiently detect changes. When state is immutable, React can quickly determine if a component needs to re-render by comparing references. If the references are different, React knows that the state has changed.

### Problems with mutating state

1. **Stale UI updates**: Directly mutating state can lead to React not detecting changes, resulting in the UI not updating as expected.
2. **Debugging difficulties**: Mutating state directly can make it harder to track state changes and debug issues.
3. **Unexpected behavior**: Mutating state can lead to unpredictable behavior, especially when multiple components depend on the same state.

### How to update state correctly

Instead of mutating state directly, always create a new state object. For example, when using the `useState` hook:

```javascript
const [state, setState] = useState(initialState);

// Incorrect: Directly mutating state
state.value = newValue;

// Correct: Creating a new state object
setState({ ...state, value: newValue });
```

When using class components and `setState`:

```javascript
this.setState((prevState) => ({
  ...prevState,
  value: newValue,
}));
```

## Further reading

- [React documentation on state](https://react.dev/learn/state-a-components-memory)
- [React documentation on reconciliation](https://react.dev/learn/preserving-and-resetting-state)
- [Why not to mutate state in React](https://daveceddia.com/why-not-modify-react-state-directly/)
