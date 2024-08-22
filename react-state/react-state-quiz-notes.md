# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  special functions that allow components to have access to state and other React features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

  1. the function name must start with 'use' followed by an uppercase letter
  2. hooks can only be called by React components and other hooks
  3. all hooks in a component must always be called at the top level of a component, and in the same order

- What is the purpose of state in React?
  state is used to store data between re-renders and that updating state causes components to re-render

- Why can't we just maintain state in a local variable?
  because the values in local variables don't persist between function calls

- What two actions happen when you call a `state setter` function?
  the state setter function updates the value of state and schedules a re-render of the 'App' component

- When does the local `state variable` get updated with the new value?
  when the component is re-rendered

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
