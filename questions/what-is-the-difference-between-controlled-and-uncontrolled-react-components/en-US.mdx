---
title: What is the difference between controlled and uncontrolled React Components?
---

## TL;DR

Controlled components in React are those where the form data is handled by the component's state. The state is the single source of truth, and any changes to the form input are managed through event handlers. Uncontrolled components, on the other hand, store their own state internally and rely on refs to access the form values. Controlled components offer more control and are easier to test, while uncontrolled components can be simpler to implement for basic use cases.

---

## What is the difference between controlled and uncontrolled React components?

### Controlled components

Controlled components are those where the form data is handled by the component's state. The state is the single source of truth, and any changes to the form input are managed through event handlers.

#### Example

```jsx
class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

### Uncontrolled components

Uncontrolled components store their own state internally and rely on refs to access the form values. This approach is more similar to traditional HTML form elements.

#### Example

```jsx
class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.inputRef.current.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

### Key differences

#### State management

- Controlled components: The state is managed by the React component.
- Uncontrolled components: The state is managed by the DOM.

#### Data flow

- Controlled components: Data flows from the component's state to the input element.
- Uncontrolled components: Data flows from the input element to the component via refs.

#### Use cases

- Controlled components: Preferred when you need to enforce validation, conditionally disable/enable inputs, or perform other complex interactions.
- Uncontrolled components: Useful for simple forms or when you need to integrate with non-React code.

## Further reading

- [React documentation on controlled and uncontrolled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)
- [React refs and the DOM](https://react.dev/learn/manipulating-the-dom-with-refs)
