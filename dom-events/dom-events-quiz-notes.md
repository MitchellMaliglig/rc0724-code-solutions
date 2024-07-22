# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to check for the values of stuff

- What is the purpose of events and event handling?
  the purpose is to increase user intractability and handle situations that wouldn't be possible without it

- Are all possible parameters required to use a JavaScript method or function?
  no

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  a function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?
  event

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the element that is responsible for firing the event, you can find out more by using console.log(event.target)

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

  the first one has the callback function not being called which is good, the second one the callback function
  is being called which is incorrect

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
