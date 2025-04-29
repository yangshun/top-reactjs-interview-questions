---
title: How would one optimize the performance of React contexts to reduce rerenders?
---

## TL;DR

To optimize the performance of React contexts and reduce rerenders, you can use techniques such as memoizing context values, splitting contexts, and using selectors. Memoizing context values with `useMemo` ensures that the context value only changes when its dependencies change. Splitting contexts allows you to isolate state changes to specific parts of your application. Using selectors with libraries like `use-context-selector` can help you only rerender components that actually need the updated context value.

```javascript
const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
```

---

## How to optimize the performance of React contexts to reduce rerenders

### Memoizing context values

One of the most effective ways to reduce unnecessary rerenders is to memoize the context value. By using `useMemo`, you can ensure that the context value only changes when its dependencies change.

```javascript
import React, { createContext, useMemo, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const value = useMemo(() => ({ state, setState }), [state]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
```

### Splitting contexts

Another technique is to split your context into multiple smaller contexts. This way, you can isolate state changes to specific parts of your application, reducing the number of components that need to rerender.

```javascript
const UserContext = createContext();
const ThemeContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Using selectors

Using selectors can help you only rerender components that actually need the updated context value. Libraries like `use-context-selector` can be very useful for this purpose.

```javascript
import { createContext, useContextSelector } from 'use-context-selector';

const MyContext = createContext();

const MyComponent = () => {
  const state = useContextSelector(MyContext, (v) => v.state);

  return <div>{state}</div>;
};
```

## Further reading

- [React documentation on context](https://react.dev/learn/passing-data-deeply-with-context)
- [useMemo Hook documentation](https://react.dev/reference/react/useMemo)
- [use-context-selector library](https://github.com/dai-shi/use-context-selector)
