# Top React.js Interview Questions

Curated top React.js interview questions with high quality answers for acing your front end interviews.

## Table of Contents

<!-- TABLE_OF_CONTENTS:START -->

| No. | Questions |
| --- | --------- |
| 1 | [What is React? Describe the benefits of React](#what-is-react-describe-the-benefits-of-react) |
| 2 | [What is the difference between React Node, React Element, and a React Component?](#what-is-the-difference-between-react-node-react-element-and-a-react-component) |
| 3 | [What is JSX and how does it work?](#what-is-jsx-and-how-does-it-work) |
| 4 | [What is the difference between state and props in React?](#what-is-the-difference-between-state-and-props-in-react) |
| 5 | [What is the purpose of the `key` prop in React?](#what-is-the-purpose-of-the-key-prop-in-react) |
| 6 | [What is the consequence of using array indices as the value for `key`s in React?](#what-is-the-consequence-of-using-array-indices-as-the-value-for-keys-in-react) |
| 7 | [What is the difference between controlled and uncontrolled React Components?](#what-is-the-difference-between-controlled-and-uncontrolled-react-components) |
| 8 | [What are some pitfalls about using context in React?](#what-are-some-pitfalls-about-using-context-in-react) |
| 9 | [What are the benefits of using hooks in React?](#what-are-the-benefits-of-using-hooks-in-react) |
| 10 | [What are the rules of React hooks?](#what-are-the-rules-of-react-hooks) |
| 11 | [What is the difference between `useEffect` and `useLayoutEffect` in React?](#what-is-the-difference-between-useeffect-and-uselayouteffect-in-react) |
| 12 | [What is the purpose of callback function argument format of `setState()` in React and when should it be used?](#what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used) |
| 13 | [What does the dependency array of `useEffect` affect?](#what-does-the-dependency-array-of-useeffect-affect) |
| 14 | [What is the `useRef` hook in React and when should it be used?](#what-is-the-useref-hook-in-react-and-when-should-it-be-used) |
| 15 | [What is the `useCallback` hook in React and when should it be used?](#what-is-the-usecallback-hook-in-react-and-when-should-it-be-used) |
| 16 | [What is the `useMemo` hook in React and when should it be used?](#what-is-the-usememo-hook-in-react-and-when-should-it-be-used) |
| 17 | [What is the `useReducer` hook in React and when should it be used?](#what-is-the-usereducer-hook-in-react-and-when-should-it-be-used) |
| 18 | [What is the `useId` hook in React and when should it be used?](#what-is-the-useid-hook-in-react-and-when-should-it-be-used) |
| 19 | [What does re-rendering mean in React?](#what-does-re-rendering-mean-in-react) |
| 20 | [What are React Fragments used for?](#what-are-react-fragments-used-for) |
| 21 | [What is `forwardRef()` in React used for?](#what-is-forwardref-in-react-used-for) |
| 22 | [How do you reset a component's state in React?](#how-do-you-reset-a-components-state-in-react) |
| 23 | [Why does React recommend against mutating state?](#why-does-react-recommend-against-mutating-state) |
| 24 | [What are error boundaries in React for?](#what-are-error-boundaries-in-react-for) |
| 25 | [How do you test React applications?](#how-do-you-test-react-applications) |
| 26 | [Explain what React hydration is](#explain-what-react-hydration-is) |
| 27 | [What are React Portals used for?](#what-are-react-portals-used-for) |
| 28 | [How do you debug React applications?](#how-do-you-debug-react-applications) |
| 29 | [What is React strict mode and what are its benefits?](#what-is-react-strict-mode-and-what-are-its-benefits) |
| 30 | [How do you localize React applications?](#how-do-you-localize-react-applications) |
| 31 | [What is code splitting in a React application?](#what-is-code-splitting-in-a-react-application) |
| 32 | [How would one optimise the performance of React contexts to reduce rerenders?](#how-would-one-optimise-the-performance-of-react-contexts-to-reduce-rerenders) |
| 33 | [What are higher order components in React?](#what-are-higher-order-components-in-react) |
| 34 | [What is the Flux pattern and what are its benefits?](#what-is-the-flux-pattern-and-what-are-its-benefits) |
| 35 | [Explain one-way data flow of React and its benefits](#explain-one-way-data-flow-of-react-and-its-benefits) |
| 36 | [How do you handle asynchronous data loading in React applications?](#how-do-you-handle-asynchronous-data-loading-in-react-applications) |
| 37 | [Explain server-side rendering of React applications and its benefits?](#explain-server-side-rendering-of-react-applications-and-its-benefits) |
| 38 | [Explain static generation of React applications and its benefits?](#explain-static-generation-of-react-applications-and-its-benefits) |
| 39 | [Explain the presentational vs container component pattern in React](#explain-the-presentational-vs-container-component-pattern-in-react) |
| 40 | [What are some common pitfalls when doing data fetching in React?](#what-are-some-common-pitfalls-when-doing-data-fetching-in-react) |
| 41 | [What are render props in React and what are they for?](#what-are-render-props-in-react-and-what-are-they-for) |
| 42 | [What are some React anti-patterns?](#what-are-some-react-anti-patterns) |
| 43 | [How do you decide between using React state, context, and external state managers?](#how-do-you-decide-between-using-react-state-context-and-external-state-managers) |
| 44 | [Explain the composition pattern in React](#explain-the-composition-pattern-in-react) |
| 45 | [What is virtual DOM in React?](#what-is-virtual-dom-in-react) |
| 46 | [How does virtual DOM in React work? What are its benefits and downsides?](#how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides) |
| 47 | [What is React Fiber and how is it an improvement over the previous approach?](#what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach) |
| 48 | [What is reconciliation in React?](#what-is-reconciliation-in-react) |
| 49 | [What is React Suspense and what does it enable?](#what-is-react-suspense-and-what-does-it-enable) |
| 50 | [Explain what happens when `setState` is called in React](#explain-what-happens-when-setstate-is-called-in-react) |

<!-- TABLE_OF_CONTENTS:END -->

## Questions with answers

<!-- QUESTIONS:START -->

1. ### What is React? Describe the benefits of React

    <!-- Update here: /questions/what-is-react-describe-the-benefits-of-react/en-US.mdx -->

    React is a JavaScript library created by Facebook for building user interfaces, primarily for single-page applications. It allows developers to create reusable components that manage their own state. Key benefits of React include a component-based architecture for modular code, the virtual DOM for efficient updates, a declarative UI for more readable code, one-way data binding for predictable data flow, and a strong community and ecosystem with abundant resources and tools.
    
    **Key characteristics of React**:
    
    - **Declarative**: You describe the desired state of your UI based on data, and React handles updating the actual DOM efficiently.
    - **Component-based**: Build reusable and modular UI elements (components) that manage their own state and logic.
    - **Virtual DOM**: React uses a lightweight in-memory representation of the actual DOM, allowing it to perform updates selectively and efficiently.
    - **JSX**: While not mandatory, JSX provides a syntax extension that allows you to write HTML-like structures within your JavaScript code, making UI development more intuitive.

    <!-- Update here: /questions/what-is-react-describe-the-benefits-of-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-react-describe-the-benefits-of-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

2. ### What is the difference between React Node, React Element, and a React Component?

    <!-- Update here: /questions/what-is-the-difference-between-react-node-react-element-and-a-react-component/en-US.mdx -->

    A React Node is any renderable unit in React, such as an element, string, number, or `null`. A React Element is an immutable object describing what to render, created using JSX or `React.createElement`. A React Component is a function or class that returns React Elements, enabling the creation of reusable UI pieces.

    <!-- Update here: /questions/what-is-the-difference-between-react-node-react-element-and-a-react-component/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-difference-between-react-node-react-element-and-a-react-component) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

3. ### What is JSX and how does it work?

    <!-- Update here: /questions/what-is-jsx-and-how-does-it-work/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-jsx-and-how-does-it-work/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-jsx-and-how-does-it-work) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

4. ### What is the difference between state and props in React?

    <!-- Update here: /questions/what-is-the-difference-between-state-and-props-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-difference-between-state-and-props-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-difference-between-state-and-props-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

5. ### What is the purpose of the `key` prop in React?

    <!-- Update here: /questions/what-is-the-purpose-of-the-key-prop-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-purpose-of-the-key-prop-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-purpose-of-the-key-prop-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

6. ### What is the consequence of using array indices as the value for `key`s in React?

    <!-- Update here: /questions/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-consequence-of-using-array-indices-as-the-value-for-key-s-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

7. ### What is the difference between controlled and uncontrolled React Components?

    <!-- Update here: /questions/what-is-the-difference-between-controlled-and-uncontrolled-react-components/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-difference-between-controlled-and-uncontrolled-react-components/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-difference-between-controlled-and-uncontrolled-react-components) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

8. ### What are some pitfalls about using context in React?

    <!-- Update here: /questions/what-are-some-pitfalls-about-using-context-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-some-pitfalls-about-using-context-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-some-pitfalls-about-using-context-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

9. ### What are the benefits of using hooks in React?

    <!-- Update here: /questions/what-are-the-benefits-of-using-hooks-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-the-benefits-of-using-hooks-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-the-benefits-of-using-hooks-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

10. ### What are the rules of React hooks?

    <!-- Update here: /questions/what-are-the-rules-of-react-hooks/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-the-rules-of-react-hooks/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-the-rules-of-react-hooks) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

11. ### What is the difference between `useEffect` and `useLayoutEffect` in React?

    <!-- Update here: /questions/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-difference-between-useeffect-and-uselayouteffect-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

12. ### What is the purpose of callback function argument format of `setState()` in React and when should it be used?

    <!-- Update here: /questions/what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-purpose-of-callback-function-argument-format-of-setstate-in-react-and-when-should-it-be-used) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

13. ### What does the dependency array of `useEffect` affect?

    <!-- Update here: /questions/what-does-the-dependency-array-of-useeffect-affect/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-does-the-dependency-array-of-useeffect-affect/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-does-the-dependency-array-of-useeffect-affect) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

14. ### What is the `useRef` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-useref-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-useref-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-useref-hook-in-react-and-when-should-it-be-used) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

15. ### What is the `useCallback` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-usecallback-hook-in-react-and-when-should-it-be-used) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

16. ### What is the `useMemo` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-usememo-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-usememo-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-usememo-hook-in-react-and-when-should-it-be-used) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

17. ### What is the `useReducer` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-usereducer-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-usereducer-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-usereducer-hook-in-react-and-when-should-it-be-used) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

18. ### What is the `useId` hook in React and when should it be used?

    <!-- Update here: /questions/what-is-the-useid-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-useid-hook-in-react-and-when-should-it-be-used/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-useid-hook-in-react-and-when-should-it-be-used) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

19. ### What does re-rendering mean in React?

    <!-- Update here: /questions/what-does-re-rendering-mean-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-does-re-rendering-mean-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-does-re-rendering-mean-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

20. ### What are React Fragments used for?

    <!-- Update here: /questions/what-are-react-fragments-used-for/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-react-fragments-used-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-react-fragments-used-for) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

21. ### What is `forwardRef()` in React used for?

    <!-- Update here: /questions/what-is-forwardref-in-react-used-for/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-forwardref-in-react-used-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-forwardref-in-react-used-for) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

22. ### How do you reset a component's state in React?

    <!-- Update here: /questions/how-do-you-reset-a-components-state-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/how-do-you-reset-a-components-state-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/how-do-you-reset-a-components-state-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

23. ### Why does React recommend against mutating state?

    <!-- Update here: /questions/why-does-react-recommend-against-mutating-state/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/why-does-react-recommend-against-mutating-state/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/why-does-react-recommend-against-mutating-state) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

24. ### What are error boundaries in React for?

    <!-- Update here: /questions/what-are-error-boundaries-in-react-for/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-error-boundaries-in-react-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-error-boundaries-in-react-for) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

25. ### How do you test React applications?

    <!-- Update here: /questions/how-do-you-test-react-applications/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/how-do-you-test-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/how-do-you-test-react-applications) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

26. ### Explain what React hydration is

    <!-- Update here: /questions/explain-what-react-hydration-is/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/explain-what-react-hydration-is/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/explain-what-react-hydration-is) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

27. ### What are React Portals used for?

    <!-- Update here: /questions/what-are-react-portals-used-for/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-react-portals-used-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-react-portals-used-for) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

28. ### How do you debug React applications?

    <!-- Update here: /questions/how-do-you-debug-react-applications/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/how-do-you-debug-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/how-do-you-debug-react-applications) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

29. ### What is React strict mode and what are its benefits?

    <!-- Update here: /questions/what-is-react-strict-mode-and-what-are-its-benefits/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-react-strict-mode-and-what-are-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-react-strict-mode-and-what-are-its-benefits) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

30. ### How do you localize React applications?

    <!-- Update here: /questions/how-do-you-localize-react-applications/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/how-do-you-localize-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/how-do-you-localize-react-applications) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

31. ### What is code splitting in a React application?

    <!-- Update here: /questions/what-is-code-splitting-in-a-react-application/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-code-splitting-in-a-react-application/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-code-splitting-in-a-react-application) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

32. ### How would one optimise the performance of React contexts to reduce rerenders?

    <!-- Update here: /questions/how-would-one-optimise-the-performance-of-react-contexts-to-reduce-rerenders/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/how-would-one-optimise-the-performance-of-react-contexts-to-reduce-rerenders/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/how-would-one-optimise-the-performance-of-react-contexts-to-reduce-rerenders) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

33. ### What are higher order components in React?

    <!-- Update here: /questions/what-are-higher-order-components-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-higher-order-components-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-higher-order-components-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

34. ### What is the Flux pattern and what are its benefits?

    <!-- Update here: /questions/what-is-the-flux-pattern-and-what-are-its-benefits/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-the-flux-pattern-and-what-are-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-the-flux-pattern-and-what-are-its-benefits) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

35. ### Explain one-way data flow of React and its benefits

    <!-- Update here: /questions/explain-one-way-data-flow-of-react-and-its-benefits/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/explain-one-way-data-flow-of-react-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/explain-one-way-data-flow-of-react-and-its-benefits) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

36. ### How do you handle asynchronous data loading in React applications?

    <!-- Update here: /questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/how-do-you-handle-asynchronous-data-loading-in-react-applications/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/how-do-you-handle-asynchronous-data-loading-in-react-applications) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

37. ### Explain server-side rendering of React applications and its benefits?

    <!-- Update here: /questions/explain-server-side-rendering-of-react-applications-and-its-benefits/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/explain-server-side-rendering-of-react-applications-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/explain-server-side-rendering-of-react-applications-and-its-benefits) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

38. ### Explain static generation of React applications and its benefits?

    <!-- Update here: /questions/explain-static-generation-of-react-applications-and-its-benefits/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/explain-static-generation-of-react-applications-and-its-benefits/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/explain-static-generation-of-react-applications-and-its-benefits) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

39. ### Explain the presentational vs container component pattern in React

    <!-- Update here: /questions/explain-the-presentational-vs-container-component-pattern-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/explain-the-presentational-vs-container-component-pattern-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/explain-the-presentational-vs-container-component-pattern-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

40. ### What are some common pitfalls when doing data fetching in React?

    <!-- Update here: /questions/what-are-some-common-pitfalls-when-doing-data-fetching-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-some-common-pitfalls-when-doing-data-fetching-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-some-common-pitfalls-when-doing-data-fetching-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

41. ### What are render props in React and what are they for?

    <!-- Update here: /questions/what-are-render-props-in-react-and-what-are-they-for/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-render-props-in-react-and-what-are-they-for/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-render-props-in-react-and-what-are-they-for) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

42. ### What are some React anti-patterns?

    <!-- Update here: /questions/what-are-some-react-anti-patterns/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-are-some-react-anti-patterns/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-are-some-react-anti-patterns) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

43. ### How do you decide between using React state, context, and external state managers?

    <!-- Update here: /questions/how-do-you-decide-between-using-react-state-context-and-external-state-managers/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/how-do-you-decide-between-using-react-state-context-and-external-state-managers/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/how-do-you-decide-between-using-react-state-context-and-external-state-managers) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

44. ### Explain the composition pattern in React

    <!-- Update here: /questions/explain-the-composition-pattern-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/explain-the-composition-pattern-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/explain-the-composition-pattern-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

45. ### What is virtual DOM in React?

    <!-- Update here: /questions/what-is-virtual-dom-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-virtual-dom-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-virtual-dom-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

46. ### How does virtual DOM in React work? What are its benefits and downsides?

    <!-- Update here: /questions/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/how-does-virtual-dom-in-react-work-what-are-its-benefits-and-downsides) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

47. ### What is React Fiber and how is it an improvement over the previous approach?

    <!-- Update here: /questions/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-react-fiber-and-how-is-it-an-improvement-over-the-previous-approach) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

48. ### What is reconciliation in React?

    <!-- Update here: /questions/what-is-reconciliation-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-reconciliation-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-reconciliation-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

49. ### What is React Suspense and what does it enable?

    <!-- Update here: /questions/what-is-react-suspense-and-what-does-it-enable/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/what-is-react-suspense-and-what-does-it-enable/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/what-is-react-suspense-and-what-does-it-enable) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>

50. ### Explain what happens when `setState` is called in React

    <!-- Update here: /questions/explain-what-happens-when-setstate-is-called-in-react/en-US.mdx -->

    <!-- Do not use any headings within the TL;DR section.  -->

    <!-- Update here: /questions/explain-what-happens-when-setstate-is-called-in-react/en-US.mdx -->

    <br>

    > Read the [detailed answer](https://greatfrontend.com/questions/quiz/explain-what-happens-when-setstate-is-called-in-react) on [GreatFrontEnd](https://greatfrontend.com/) which allows progress tracking, contains more code samples, and useful resources.

    [Back to top ↑](#table-of-contents)
    <br>
    <br>


<!-- QUESTIONS:END -->
