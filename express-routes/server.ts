import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});

app.get('/', (req, res) => {
  res.send('GET pizza home');
});

app.get('/pizza', (req, res) => {
  res.send('GET that pizza');
});

app.post('/pizza/123', (req, res) => {
  res.send('POST pizza #123');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
