# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  writing asynchronous code that looks like it's synchronous

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  the code is written and read sequentially

- When do you use `async`?
  in the async function definition

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  before the function call that returns a promise inside an async function, code dies idk

- How do you handle errors with `await`?
  catch

- What do `try`, `catch` and `throw` do? When do you use them?
  tries something, catch error, throw error

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  no more waiting and the rejected value is thrown

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  idk i've barely done them all

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
