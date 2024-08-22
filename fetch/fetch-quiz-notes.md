# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  returns a promise that resolves to the Response object representing the outcome of the request

- What is the default request method used by `fetch()`?
  GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  by passing in an options object as the second argument to fetch()
  fetch (url, {method: pizza});

- How does `fetch` report errors?
  fetch considers a promise resolved if it returns any sort of code, aside from
  network failures and anything that prevents the request from completing

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
