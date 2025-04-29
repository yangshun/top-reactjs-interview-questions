---
title: What are render props in React and what are they for?
---

## TL;DR

Render props in React are a technique for sharing code between components using a prop whose value is a function. This function returns a React element and allows you to pass data to the child component. It helps in reusing component logic without using higher-order components or hooks.

```jsx
class DataFetcher extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

// Usage
<DataFetcher
  url="/api/data"
  render={(data) => <div>{data ? data.name : 'Loading...'}</div>}
/>;
```

---

## What are render props in React and what are they for?

### Definition

Render props is a pattern in React for sharing code between components using a prop whose value is a function. This function is called a "render prop" because it is used to determine what to render.

### Purpose

Render props are used to:

- Share logic between components without using higher-order components (HOCs) or hooks
- Make components more reusable and composable
- Improve code readability and maintainability

### How it works

A component that uses a render prop takes a function as a prop. This function is called within the component's `render` method to produce the desired output.

### Example

Here is a simple example to illustrate the concept:

```jsx
class MouseTracker extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

// Usage
<MouseTracker
  render={({ x, y }) => (
    <h1>
      The mouse position is ({x}, {y})
    </h1>
  )}
/>;
```

In this example, `MouseTracker` is a component that tracks the mouse position and passes the coordinates to the `render` prop function. The `render` prop function then determines how to display the coordinates.

### Benefits

- **Reusability**: The logic for tracking the mouse position is encapsulated in `MouseTracker`, making it reusable across different parts of the application.
- **Separation of concerns**: The `MouseTracker` component is responsible for tracking the mouse position, while the `render` prop function is responsible for rendering the UI.
- **Flexibility**: Different UI representations can be created by passing different `render` prop functions to the same `MouseTracker` component.

## Further reading

- [Advanced React patterns](https://kentcdodds.com/blog/compound-components-with-react-hooks)
