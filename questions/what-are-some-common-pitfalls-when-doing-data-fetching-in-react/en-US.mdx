---
title: What are some common pitfalls when doing data fetching in React?
---

## TL;DR

Common pitfalls when doing data fetching in React include not handling loading and error states, causing memory leaks by not cleaning up subscriptions, and not using the right lifecycle methods or hooks. Always ensure you handle these states properly, clean up after your components, and use `useEffect` for side effects in functional components.

---

## Common pitfalls when doing data fetching in React

### Not handling loading and error states

When fetching data, it's crucial to manage the different states of the request: loading, success, and error. Failing to do so can lead to a poor user experience.

```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;
return <div>{JSON.stringify(data)}</div>;
```

### Causing memory leaks by not cleaning up subscriptions

When a component unmounts before a fetch request completes, it can cause memory leaks. To prevent this, you should clean up any ongoing requests.

```jsx
useEffect(() => {
  let isMounted = true;

  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => {
      if (isMounted) {
        setData(data);
        setLoading(false);
      }
    })
    .catch((error) => {
      if (isMounted) {
        setError(error);
        setLoading(false);
      }
    });

  return () => {
    isMounted = false;
  };
}, []);
```

### Not using the right lifecycle methods or hooks

In class components, data fetching should be done in `componentDidMount`. In functional components, use the `useEffect` hook.

```jsx
// Class component
class MyComponent extends React.Component {
  componentDidMount() {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }
}

// Functional component
const MyComponent = () => {
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);
};
```

### Ignoring dependency arrays in `useEffect`

The dependency array in `useEffect` determines when the effect runs. Ignoring it can lead to unnecessary re-renders or missed updates.

```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => setError(error));
}, []); // Empty array means this effect runs once after the initial render
```

### Fetching data in the render method

Fetching data directly in the render method can cause infinite loops and performance issues. Always use lifecycle methods or hooks.

```jsx
// Incorrect
const MyComponent = () => {
  const data = fetch('https://api.example.com/data').then((response) =>
    response.json(),
  );
  return <div>{JSON.stringify(data)}</div>;
};

// Correct
const MyComponent = () => {
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, []);
};
```

## Further reading

- [React documentation on hooks](https://react.dev/reference/react/hooks)
- [React documentation on `useEffect`](https://react.dev/reference/react/useEffect)
- [Handling async requests in React](https://www.robinwieruch.de/react-hooks-fetch-data)
