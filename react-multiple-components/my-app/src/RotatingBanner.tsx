import './RotatingBanner.css';

type BannerProps = {
  item: string;
};

export function Banner({ item }: BannerProps) {
  return <h2 id="banner">{item}</h2>;
}

export function NextButton() {
  return <button id="next">Next</button>;
}

export function PreviousButton() {
  return <button id="previous">Previous</button>;
}

type indicatorsProps = {
  count: number;
};

export function Indicators({ count }: indicatorsProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button key={i} className="indicator">
        {i}
      </button>
    );
  }
  return buttons;
}
