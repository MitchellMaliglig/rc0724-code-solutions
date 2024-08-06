# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && is used to see if two conditions are true while || is used to see if one condition is true.
  They can be used to output the 2nd value based on the boolean condition of the first one.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evaluation is the idea of ending boolean checks early if it is possible to do so. && can be ended early
  if the first one is false, and || can be ended early if the first one is true.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? works in a similar way to || aside from evaluating based on being null or undefined instead of falsy

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ?: outputs a value based on the boolean condition of a given expression. It can work in a similar fashion
  to an if else statement except its on one line instead of potentially multiple.

- What is the `?.` (optional chaining) operator? When would you use it?
  ?. returns undefined if obj is null or undefined, otherwise returns obj.property. It's used to safely access
  properties on objects that might not exist

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  ... allows you to combine arrays with each other and objects with each other.

  const arr = [1, 2, 3]; --> const newArr = [...arr, 4]; --> console.log(newArr);
  // Output: [1, 2, 3, 4]

  const obj = { id: 1, name: 'Alice' }; --> const newObj = { ...obj, age: 25 }; --> console.log(newObj);
  // Output: { id: 1, name: 'Alice', age: 25 }

- What data types can be spread into an array? Into an object?
  data types that are iterable, such as strings, arrays, and objects

- How does spread syntax differ from rest syntax?
  Spread syntax 'expands' an array into its elements while rest syntax collects multiple elements and 'condenses' them
  into a single element

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
