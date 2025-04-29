---
title: How do you handle asynchronous data loading in React applications?
---

## TL;DR

In React applications, asynchronous data loading is typically handled using `useEffect` and `useState` hooks. You initiate the data fetch inside `useEffect` and update the state with the fetched data. This ensures that the component re-renders with the new data. Here's a simple example:

```javascript
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
```

---

## Handling asynchronous data loading in React applications

### Using `useEffect` and `useState`

The most common way to handle asynchronous data loading in React is by using the `useEffect` and `useState` hooks. `useEffect` allows you to perform side effects, such as data fetching, and `useState` helps manage the component's state.

1. **Initialize state**: Use `useState` to create state variables for storing the fetched data and loading status.
2. **Fetch data**: Use `useEffect` to perform the data fetching when the component mounts.
3. **Update state**: Once the data is fetched, update the state to trigger a re-render.

Here's a detailed example:

```javascript
import React, { useState, useEffect } from 'react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
```

### Handling errors

It's important to handle errors that may occur during data fetching. You can use a `try-catch` block within the `useEffect` to catch and handle errors.

```javascript
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  fetchData();
}, []);
```

### Using custom hooks

For better code reusability, you can create custom hooks to handle data fetching. This allows you to encapsulate the data fetching logic and reuse it across multiple components.

```javascript
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

You can then use this custom hook in your components:

```javascript
import React from 'react';
import useFetch from './useFetch';

function DataFetchingComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
```

## Further reading

- [React documentation on hooks](https://react.dev/reference/react/hooks)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Handling errors in async functions](https://javascript.info/async-await#error-handling)
