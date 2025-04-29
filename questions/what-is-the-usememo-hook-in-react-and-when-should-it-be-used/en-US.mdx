---
title: What is the `useMemo` hook in React and when should it be used?
---

## TL;DR

The `useMemo` hook in React is used to memoize expensive calculations so that they are only recomputed when one of the dependencies has changed. This can improve performance by avoiding unnecessary recalculations. You should use `useMemo` when you have a computationally expensive function that doesn't need to run on every render.

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

## What is the `useMemo` hook in React and when should it be used?

### What is `useMemo`?

The `useMemo` hook is a built-in React hook that allows you to memoize the result of a function. This means that the function will only be re-executed when one of its dependencies changes. The primary purpose of `useMemo` is to optimize performance by preventing unnecessary recalculations.

### Syntax

The syntax for `useMemo` is as follows:

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- The first argument is a function that returns the value you want to memoize.
- The second argument is an array of dependencies. The memoized value will only be recomputed when one of these dependencies changes.

### When should it be used?

#### Expensive calculations

If you have a function that performs a computationally expensive calculation, you can use `useMemo` to ensure that this calculation is only performed when necessary.

```javascript
const expensiveCalculation = (num) => {
  // Some expensive calculation
  return num * 2;
};

const MyComponent = ({ number }) => {
  const memoizedValue = useMemo(() => expensiveCalculation(number), [number]);

  return <div>{memoizedValue}</div>;
};
```

#### Avoiding unnecessary renders

`useMemo` can also be useful for avoiding unnecessary renders of child components. If a child component depends on a value that is expensive to compute, you can use `useMemo` to ensure that the value is only recomputed when necessary.

```javascript
const MyComponent = ({ items }) => {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a - b);
  }, [items]);

  return <ChildComponent sortedItems={sortedItems} />;
};
```

### Caveats

- **Overuse**: Overusing `useMemo` can lead to more complex code without significant performance benefits. It should be used judiciously.
- **Dependencies**: Make sure to correctly specify all dependencies. Missing dependencies can lead to stale values, while extra dependencies can lead to unnecessary recalculations.

## Further reading

- [React documentation on `useMemo`](https://react.dev/reference/react/useMemo)
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback) by Kent C. Dodds
