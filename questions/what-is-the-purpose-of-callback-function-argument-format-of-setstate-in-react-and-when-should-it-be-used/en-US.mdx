---
title: What is the purpose of callback function argument format of `setState()` in React and when should it be used?
---

## TL;DR

The callback function argument format of `setState()` in React is used to ensure that state updates are based on the most recent state and props. This is particularly important when the new state depends on the previous state. Instead of passing an object directly to `setState()`, you pass a function that takes the previous state and props as arguments and returns the new state.

```javascript
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment,
}));
```

---

## Purpose of callback function argument format of `setState()` in React

### Ensuring state updates are based on the most recent state

React's `setState()` is asynchronous, meaning multiple calls to `setState()` can be batched together for performance reasons. If you rely on the current state to compute the next state, using the callback function format ensures that you are working with the most up-to-date state.

### Syntax

The callback function format of `setState()` takes a function as an argument. This function receives two parameters: `prevState` and `props`. It returns an object representing the new state.

```javascript
this.setState((prevState, props) => {
  return {
    counter: prevState.counter + props.increment,
  };
});
```

### When to use it

- **When the new state depends on the previous state**: If you need to update the state based on the current state, use the callback function format to avoid potential issues with asynchronous state updates.
- **When multiple state updates are batched**: In scenarios where multiple `setState()` calls might be batched together, using the callback function ensures that each update is based on the most recent state.

### Example

Consider a counter component where the state update depends on the previous state:

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  incrementCounter = () => {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
```

In this example, using the callback function format ensures that the `counter` state is correctly incremented, even if multiple `incrementCounter` calls are made in quick succession.

## Further reading

- [React Docs: State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [React Docs: setState()](https://react.dev/reference/react/useState#setstate)
- [React Docs: Responding to Events](https://react.dev/learn/responding-to-events)
