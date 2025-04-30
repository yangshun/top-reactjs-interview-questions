---
title: Explain what happens when the `useState` setter function is called in React
---

## TL;DR

When the setter function returned by the `useState` hook is called in React, it schedules an update to the component's state value. React then queues a re-render of the component with the new state. This process is typically asynchronous, and React batches multiple state updates together for performance.

---

## What happens when the `useState` setter is called

### State update scheduling

When you call the setter function provided by `useState` (e.g., `setCount`), React schedules an update for that specific state variable. This doesn't happen instantly; React marks the component as needing to re-render with the updated state value.

```javascript
const [count, setCount] = useState(0);
// ...
setCount(count + 1); // Schedules an update to set 'count' to 1
```

### State replacement

The `useState` setter function **replaces** the old state value entirely with the new value you provide. If your state is an object and you only want to update one property, you need to manually spread the old state and override the specific property.

```javascript
const [user, setUser] = useState({ name: 'Anon', age: 99 });

// To update only name, you must spread the old state:
setUser((prevState) => ({ ...prevState, name: 'John' }));
// If you just did setUser({ name: 'John' }), the 'age' property would be lost.
```

### Re-rendering

After scheduling the state update(s), React will eventually trigger a re-render of the component. The functional component body is executed again with the new state value(s). React updates its virtual DOM, compares it with the previous version, and efficiently updates the actual DOM only where necessary.

### Asynchronous nature and Batching

State updates triggered by `useState` setters are typically asynchronous and batched. If you call multiple state setters in the same event handler or effect, React will often batch these updates together into a single re-render pass for better performance. Because of this, you shouldn't rely on the state variable having its new value immediately after calling the setter. If the new state depends on the previous state, use the functional update form.

```javascript
// Assume count is 0
setCount(count + 1); // Queues update to 1
setCount(count + 1); // Still sees count as 0, queues update to 1 again!
// Result might be 1, not 2

// Correct way using functional update:
setCount((prevCount) => prevCount + 1); // Queues update based on previous state
setCount((prevCount) => prevCount + 1); // Queues another update based on the result of the first
// Result will be 2
```

## Further reading

- [React Docs: Using the State Hook (`useState`)](https://react.dev/reference/react/useState)
- [React Docs: Queueing multiple state updates](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
