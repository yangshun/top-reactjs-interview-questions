---
title: Explain the presentational vs container component pattern in React
---

## TL;DR

In React, the presentational vs container component pattern is a design approach where presentational components focus on how things look and container components focus on how things work. Presentational components are concerned with rendering HTML and CSS, while container components handle the logic and state management. This separation helps in maintaining a clean and organized codebase.

---

## Presentational vs container component pattern in React

### Presentational components

Presentational components are primarily concerned with the UI. They receive data and callbacks exclusively via props and rarely have their own state (except for UI state like `hover` or `active`). They are often stateless functional components but can also be class components.

#### Characteristics

- Focus on how things look
- Receive data and callbacks via props
- Rarely have their own state
- Typically written as functional components
- Do not use Redux or other state management libraries directly

#### Example

```jsx
const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);
```

### Container components

Container components are concerned with how things work. They manage state and handle business logic. They often fetch data, handle user interactions, and pass data down to presentational components as props.

#### Characteristics

- Focus on how things work
- Manage state and handle business logic
- Fetch data and handle user interactions
- Pass data and callbacks to presentational components
- Often use Redux or other state management libraries

#### Example

```jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import Button from './Button';

class ButtonContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  handleClick = () => {
    // Handle button click
  };

  render() {
    return <Button onClick={this.handleClick} label="Click me" />;
  }
}

const mapDispatchToProps = {
  fetchData,
};

export default connect(null, mapDispatchToProps)(ButtonContainer);
```

### Benefits

- **Separation of concerns**: By separating the UI from the logic, the codebase becomes more modular and easier to maintain.
- **Reusability**: Presentational components can be reused across different parts of the application since they are not tied to specific logic.
- **Testability**: Presentational components are easier to test because they are stateless and only rely on props.

## Further reading

- [React documentation on components and props](https://react.dev/learn/passing-props-to-a-component)
- [Dan Abramov's article on presentational and container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Redux documentation on presentational and container components](https://redux.js.org/basics/usage-with-react#presentational-and-container-components)
