# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  no

- How do you add an element as a child to another element?
  appendChild()

- What do you pass as the arguments to the `element.setAttribute()` method?
  two strings representing the attribute followed by its value respectively

- What steps do you need to take in order to insert a new element into the page?
  create the DOM element, assign content and attributes, then append it to an element
  that currently already exists on the DOM

- What is the `textContent` property of an element object for?
  it represents the text content of the node and its descendants

- Name two ways to set the `class` attribute of a DOM element.
  $element.setAttribute('class','className)
  $element.className = 'className';

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  1. we can reuse the function to do similar work repeatedly
  2. the code is easier to fix if an issue arises

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
