import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

function App() {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
  }

  const button = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button onClick={handleClick} ref={button}>
        Pop up!
      </button>
      <p>text above</p>
      <Popup isOpen={isOpen} positionTo={button.current} onClose={handleClick}>
        <ul>
          <li>BBQ Chicken Pizza</li>
          <li>Pineapple Pizza</li>
          <li>Mushroom Pizza</li>
        </ul>
      </Popup>
      <p>text below</p>
    </>
  );
}

export default App;
