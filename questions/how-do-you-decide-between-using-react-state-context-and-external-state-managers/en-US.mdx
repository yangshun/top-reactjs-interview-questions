---
title: How do you decide between using React state, context, and external state managers?
---

## TL;DR

Choosing between React state, context, and external state managers depends on the complexity and scope of your application's state management needs. Use React state for local component state, React context for global state that needs to be shared across multiple components, and external state managers like Redux or MobX for complex state management that requires advanced features like middleware, time-travel debugging, or when the state needs to be shared across a large application.

---

## Deciding between React state, context, and external state managers

### React state

React state is best suited for managing local state within a single component. It is simple to use and provides a straightforward way to handle state that does not need to be shared across multiple components.

#### When to use React state

- When the state is only relevant to a single component
- When the state does not need to be accessed or modified by other components
- When you want to keep the component self-contained and easy to understand

#### Example

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### React context

React context is useful for sharing state across multiple components without having to pass props down through every level of the component tree. It is ideal for global state that needs to be accessed by many components.

#### When to use React context

- When you need to share state across multiple components
- When you want to avoid prop drilling (passing props through many levels of components)
- When the state is relatively simple and does not require advanced state management features

#### Example

```jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}
```

### External state managers

External state managers like Redux or MobX are designed for complex state management needs. They provide advanced features such as middleware, time-travel debugging, and the ability to manage state across a large application.

#### When to use external state managers

- When the state management needs are complex and involve many interconnected pieces of state
- When you need advanced features like middleware, time-travel debugging, or dev tools
- When the state needs to be shared across a large application with many components

#### Example with Redux

```jsx
// actions.js
export const increment = () => ({ type: 'INCREMENT' });

// reducer.js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default counterReducer;

// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;

// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

## Further reading

- [React documentation on state](https://react.dev/learn/state-a-components-memory)
- [React documentation on context](https://react.dev/learn/passing-data-deeply-with-context)
- [Redux documentation](https://redux.js.org/)
- [MobX documentation](https://mobx.js.org/README.html)
