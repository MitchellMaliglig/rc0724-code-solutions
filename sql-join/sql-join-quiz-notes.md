# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  Primary key in one spot as an attribute in another spot

- How do you join two SQL tables? (Provide at least two syntaxes.)
  SELECT ... FROM table-1 JOIN table-2 USING attribute
  SELECT table-1.name as A
  table-2.name as B
  FROM table-1 JOIN table-2 USING attribute

- How do you temporarily rename columns or tables in a SQL statement?
  as

- How do you create a one-to-many relationship between two tables?
  Foreign key in one spot points to a primary key in another spot

- How do you create a many-to-many relationship between two tables?
  using a join table

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
