import React, { useState } from 'react';
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

  function handleNext() {
    setIndex((index + 1) % items.length);
  }

  function handlePrevious() {
    setIndex((index - 1 + items.length) % items.length);
  }

  function handleClickIndicator(e: React.MouseEvent) {
    const target = e.target as HTMLButtonElement;
    setIndex(Number(target.textContent));
  }

  return (
    <>
      <div id="container">
        <Banner item={items[index]}></Banner>
        <PreviousButton onPrevious={handlePrevious}></PreviousButton>
      </div>
      <div id="indicators">
        <Indicators
          count={items.length}
          highlightedIndex={index}
          onClickIndicator={handleClickIndicator}></Indicators>
      </div>
      <div id="container">
        <NextButton onNext={handleNext}></NextButton>
      </div>
    </>
  );
}

export default App;
