---
title: What are some React anti-patterns?
---

## TL;DR

React anti-patterns are practices that can lead to inefficient, hard-to-maintain, or buggy code. Some common anti-patterns include:

- Mutating state directly instead of using `setState`
- Using `componentWillMount` for data fetching
- Overusing `componentWillReceiveProps`
- Not using keys in lists
- Overusing inline functions in render
- Deeply nested state

---

## Common React anti-patterns

### Mutating state directly

Directly mutating the state can lead to unexpected behavior and bugs. Always use `setState` to update the state.

```javascript
// Anti-pattern
this.state.count = 1;

// Correct approach
this.setState({ count: 1 });
```

### Using `componentWillMount` for data fetching

`componentWillMount` is deprecated and should not be used for data fetching. Use `componentDidMount` instead.

```javascript
// Anti-pattern
componentWillMount() {
  fetchData();
}

// Correct approach
componentDidMount() {
  fetchData();
}
```

### Overusing `componentWillReceiveProps`

`componentWillReceiveProps` is deprecated. Use `getDerivedStateFromProps` or `componentDidUpdate` instead.

```javascript
// Anti-pattern
componentWillReceiveProps(nextProps) {
  if (nextProps.value !== this.props.value) {
    this.setState({ value: nextProps.value });
  }
}

// Correct approach
static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null;
}
```

### Not using keys in lists

Keys help React identify which items have changed, are added, or are removed. Not using keys can lead to inefficient rendering.

```javascript
// Anti-pattern
const listItems = items.map((item) => <li>{item}</li>);

// Correct approach
const listItems = items.map((item) => <li key={item.id}>{item}</li>);
```

### Overusing inline functions in render

Defining functions inside the `render` method can lead to performance issues because a new function is created on every render.

```javascript
// Anti-pattern
render() {
  return <button onClick={() => this.handleClick()}>Click me</button>;
}

// Correct approach
render() {
  return <button onClick={this.handleClick}>Click me</button>;
}
```

### Deeply nested state

Deeply nested state can make state management complex and error-prone. Flatten the state structure when possible.

```javascript
// Anti-pattern
this.state = {
  user: {
    profile: {
      name: 'John',
      age: 30,
    },
  },
};

// Correct approach
this.state = {
  userName: 'John',
  userAge: 30,
};
```

## Further reading

- [React documentation on state](https://react.dev/learn/state-a-components-memory)
- [React documentation on lists and keys](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [React documentation on hooks](https://react.dev/reference/react/hooks)
- [React documentation on memo optimizing performance](https://react.dev/reference/react/memo)
