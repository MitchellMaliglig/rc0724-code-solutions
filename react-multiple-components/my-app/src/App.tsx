import { useState } from 'react';
import './App.css';
import {
  Indicators,
  NextButton,
  PreviousButton,
  Banner,
} from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  const [index, setIndex] = useState(0);

  function increment() {
    setIndex((index + 1) % items.length);
  }

  function decrement() {
    setIndex((index - 1 + items.length) % items.length);
  }

  return (
    <>
      <div id="container">
        <Banner item={items[index]}></Banner>
        <PreviousButton onPrevious={decrement}></PreviousButton>
      </div>
      <div id="indicators">
        <Indicators count={items.length} highlightedIndex={index}></Indicators>
      </div>
      <div id="container">
        <NextButton onNext={increment}></NextButton>
      </div>
    </>
  );
}

export default App;
