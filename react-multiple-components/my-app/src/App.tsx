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
  return (
    <>
      <div id="container">
        <Banner item={items[0]}></Banner>
        <PreviousButton></PreviousButton>
      </div>
      <div id="indicators">
        <Indicators count={items.length}></Indicators>
      </div>
      <div id="container">
        <NextButton></NextButton>
      </div>
    </>
  );
}

export default App;
