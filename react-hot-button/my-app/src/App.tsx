import { useState } from 'react';
import './App.css';
import { HotButton } from './HotButton';

const buttonText = 'Click me';
let buttonColor = '';

function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);

    if (count >= 2) {
      buttonColor = 'stage-one';
    }
    if (count >= 5) {
      buttonColor = 'stage-two';
    }
    if (count >= 8) {
      buttonColor = 'stage-three';
    }
    if (count >= 11) {
      buttonColor = 'stage-four';
    }
    if (count >= 14) {
      buttonColor = 'stage-five';
    }
    if (count >= 17) {
      buttonColor = 'stage-final';
    }
  }

  return (
    <>
      <HotButton
        buttonText={buttonText}
        buttonColor={buttonColor}
        paragraphText={`Clicks: ${count}`}
        onButtonClick={handleButtonClick}></HotButton>
    </>
  );
}

export default App;
