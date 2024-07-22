# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  It helps us to check the values we are working with to make sure we get the expected output

- What is a "model"?
  a representation of something

- Which "document" is being referred to in the phrase Document Object Model?
  the content of a web page

- What is the word "object" referring to in the phrase Document Object Model?
  js objects that represent web page content

- What is a DOM Tree?
  the DOM tree refers to the tree-like structure of an HTML document where elements are modeled
  after the idea of branches and leaves with the HTML document as the root

- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(), getElementById()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?
  so you can access the value again if necessary

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  to allow the browser to parse all of the elements in the HTML page first before the JS code
  can access them

- What does `document.querySelector()` take as its argument and what does it return?
  CSS selector --> the first element that matches the selector

- What does `document.querySelectorAll()` take as its argument and what does it return?
  CSS selector --> NodeList of all elements that match the selector

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
