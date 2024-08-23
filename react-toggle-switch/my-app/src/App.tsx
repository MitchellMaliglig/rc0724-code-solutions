import { useState } from 'react';
import './App.css';
import { ToggleSwitch } from './ToggleSwitch';

let state = 'on';

function App() {
  let [isOn, toggleOnOff] = useState(true);

  function handleClick() {
    toggleOnOff((isOn = !isOn));

    if (isOn) {
      state = 'on';
    } else {
      state = 'off';
    }
  }

  return (
    <>
      <ToggleSwitch
        label={state}
        onToggle={handleClick}
        toggleState={state}></ToggleSwitch>
    </>
  );
}

export default App;
