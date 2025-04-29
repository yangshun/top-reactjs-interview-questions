---
title: What is the `useCallback` hook in React and when should it be used?
---

## TL;DR

The `useCallback` hook in React is used to memoize functions, preventing them from being recreated on every render. This is particularly useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. You should use `useCallback` when you have a function that is passed as a prop to a child component and you want to avoid the child component re-rendering unnecessarily.

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

## What is the `useCallback` hook in React and when should it be used?

### What is `useCallback`?

The `useCallback` hook is a React hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is useful for optimizing performance by preventing unnecessary re-creations of functions.

### Syntax

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

### When should `useCallback` be used?

#### Preventing unnecessary re-renders

When you pass a function as a prop to a child component, the child component may re-render every time the parent component re-renders, even if the function itself hasn't changed. Using `useCallback` ensures that the function reference remains the same as long as its dependencies haven't changed, thus preventing unnecessary re-renders.

```javascript
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={handleClick} />;
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log('ChildComponent rendered');
  return <button onClick={onClick}>Click me</button>;
});
```

#### Optimizing performance

In complex applications, re-creating functions on every render can be costly in terms of performance. By using `useCallback`, you can avoid this overhead and make your application more efficient.

### Caveats

- **Overuse**: Overusing `useCallback` can lead to more complex code and may not always result in performance improvements. It should be used judiciously.
- **Dependencies**: Ensure that all dependencies are correctly specified in the dependency array. Missing dependencies can lead to stale closures and bugs.

## Further reading

- [React documentation on `useCallback`](https://react.dev/reference/react/useCallback)
- [React memoization techniques](https://react.dev/reference/react/memo#skipping-re-rendering-when-props-are-unchanged)
- [Understanding React's `useCallback` and `useMemo`](https://kentcdodds.com/blog/usememo-and-usecallback)
