# React Core Concepts

> A beginner-friendly guide to how React builds and updates what you see on screen: components, state, props, hooks and inputs.

## Table of Contents

1. [Components](#1-components)
2. [Rendering](#2-rendering)
3. [DOM Structure](#3-dom-structure)
4. [Diffing Algorithm](#4-diffing-algorithm)
5. [State & useState](#5-state--usestate)
6. [Props](#6-props)
7. [Component Types](#7-component-types)
8. [useEffect & Lifecycle](#8-useeffect--lifecycle)
9. [useRef & Inputs](#9-useref--inputs)
10. [Quick Summary](#10-quick-summary)

---

## 1. Components

**In simple words:** a component is a small building block of your screen, like a Lego brick. You build it once and reuse it anywhere.

- **Definition:** a small, reusable part of the UI.
- **Naming:** a component name must start with a capital letter (`Greeting`, not `greeting`).
- **JSX:** HTML-like syntax written inside JavaScript.

```jsx
function Greeting() {
  return <h1>Hello, React!</h1>;
}
```

---

## 2. Rendering

**In simple words:** rendering is React running your component to work out what should appear on screen.

- **Process:** React calls the component, then updates the DOM.
- **Screen change:** if nothing changes, the DOM is left untouched. This keeps the app fast.

---

## 3. DOM Structure

**In simple words:** the DOM is the live structure of your webpage. React keeps a lightweight copy of it in memory so it can plan changes before touching the real page.

| Type | Description |
| --- | --- |
| **Real DOM** | The actual webpage structure that the browser shows. |
| **Virtual DOM** | An in-memory JavaScript copy of the UI that React uses to plan updates. |

---

## 4. Diffing Algorithm

**In simple words:** diffing means "spot the difference". React compares the old screen with the new one and changes only the parts that are different.

- **Process:** React compares the old and new UI to work out what changed.
- **List keys:** use `key={item.id}` so React can match each item between renders.

```jsx
<ul>
  {items.map((item) => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>
```

> **Tip:** the key should be a unique, stable value like an `id`, not the position in the list.

---

## 5. State & useState

**In simple words:** state is a component's memory. When it changes, React updates the screen.

- **State:** data that changes over time.
- **`useState` hook:** creates and updates state.
- **Setter timing:** the value changes on the next render, not immediately.
- **Rule:** never modify state directly; always use the setter function.

```jsx
const [count, setCount] = useState(0);

setCount(count + 1); // correct
// count = count + 1; // wrong: never modify state directly
```

Here `count` is the current value and `setCount` is the function that updates it. The starting value is `0`.

---

## 6. Props

**In simple words:** props are the information a parent component hands to its child, like passing a name tag.

- **Definition:** data passed from a parent component to a child.
- **Read-only:** children cannot change their props.

```jsx
function Welcome({ name }) {
  return <p>Welcome, {name}!</p>;
}

<Welcome name="Asha" />
```

---

## 7. Component Types

| Type | Description |
| --- | --- |
| **Functional component** | A JS function that returns JSX and can use Hooks. This is the modern, recommended way. |
| **Class component** | The older, class-based approach. You will still see it in older projects. |

---

## 8. useEffect & Lifecycle

**In simple words:** `useEffect` runs code after the screen has appeared, for things like fetching data, starting timers or listening for events. These are called side effects.

- **`useEffect` hook:** handles side effects.
- **Dependency array:** the second argument controls when the effect runs.

| Form | When the effect runs |
| --- | --- |
| none | After every render |
| `[]` | Once, after the first render (mount) |
| `[count]` | When `count` changes |

- **Strict Mode:** may run effects twice in development, to help you catch bugs. It does not do this in production.
- **Cleanup:** return a function to stop timers or listeners.
- **Class equivalents:** `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`.

```jsx
useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000);

  return () => clearInterval(id); // cleanup
}, []);
```

---

## 9. useRef & Inputs

**In simple words:** `useRef` is a box that holds a value without refreshing the screen when the value changes. It is often used to reach an input directly.

- **`useRef` hook:** stores a mutable value without causing re-renders.
- **Mount state:** `inputRef.current` is `null` initially, until the element appears on screen.
- **Controlled input:** the value is controlled by React state.
- **Uncontrolled input:** uses the DOM directly, with `defaultValue`.

```jsx
// Controlled
const [text, setText] = useState("");
<input value={text} onChange={(e) => setText(e.target.value)} />

// Uncontrolled
const inputRef = useRef(null);
<input ref={inputRef} defaultValue="Hello" />
```

---

## 10. Quick Summary

| Concept | One-line memory |
| --- | --- |
| Component | A reusable UI building block |
| Rendering | React runs the component to decide what to show |
| Virtual DOM | A draft copy React uses to plan changes |
| Diffing | React updates only what changed |
| State | A component's memory; changing it updates the screen |
| Props | Data passed from parent to child, read-only |
| useEffect | Runs code after render, such as fetching data |
| useRef | Remembers a value without re-rendering |