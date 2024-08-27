import React from 'react';

type BannerProps = {
  item: string;
};

export function Banner({ item }: BannerProps) {
  return <h2 id="banner">{item}</h2>;
}

type nextButtonProps = {
  onNext: () => void;
};

export function NextButton({ onNext }: nextButtonProps) {
  return (
    <button id="next" onClick={onNext}>
      Next
    </button>
  );
}

type previousButtonProps = {
  onPrevious: () => void;
};

export function PreviousButton({ onPrevious }: previousButtonProps) {
  return (
    <button id="previous" onClick={onPrevious}>
      Previous
    </button>
  );
}

type indicatorsProps = {
  count: number;
  highlightedIndex: number;
  onClickIndicator: (e: React.MouseEvent) => void;
};

export function Indicators({
  count,
  highlightedIndex,
  onClickIndicator,
}: indicatorsProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    i === highlightedIndex
      ? buttons.push(
          <button key={i} className="indicator highlighted">
            {i}
          </button>
        )
      : buttons.push(
          <button
            key={i}
            className="indicator"
            onClick={(e) => onClickIndicator(e)}>
            {i}
          </button>
        );
  }
  return buttons;
}
