import { useState } from 'react';
import './Watch.css';
import { FaPause, FaPlay } from 'react-icons/fa';

export function Watch() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalID] = useState<NodeJS.Timeout>();
  const [pause, setPause] = useState('hidden');
  const [play, setPlay] = useState('show');

  function clickPause() {
    clearInterval(intervalId);
    toggleIcon();
  }

  function clickPlay() {
    setIntervalID(setInterval(increment, 10));
    toggleIcon();
  }

  function increment() {
    setSeconds((seconds) => Number((seconds + 0.01).toFixed(2)));
  }

  function reset() {
    if (play === 'show') {
      setSeconds(0);
    }
  }

  function toggleIcon() {
    pause === 'hidden' ? setPause('show') : setPause('hidden');
    play === 'hidden' ? setPlay('show') : setPlay('hidden');
  }

  return (
    <div id="background">
      <>
        <div id="button-ring"></div>
        <div id="ring-space"></div>
        <div id="button-top" onClick={reset}></div>
        <div id="button-bottom" onClick={reset}></div>
      </>
      <div id="container">
        <div id="watch">
          <div id="timer">
            <span>{seconds}</span>
          </div>
          <FaPause id="pause" onClick={clickPause} className={pause}></FaPause>
          <FaPlay id="play" onClick={clickPlay} className={play}></FaPlay>
        </div>
      </div>
    </div>
  );
}
