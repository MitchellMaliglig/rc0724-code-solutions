import { MouseEvent, ReactElement } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

type indicatorsProps = {
  currentIndex: number;
  count: number;
  onClickIndicator: (e: MouseEvent) => void;
};

function makeIndicators(
  currentIndex: number,
  count: number,
  onClickIndicator: (e: MouseEvent) => void
) {
  const indicators = [] as ReactElement[];
  for (let i = 0; i < count; i < i++) {
    i === currentIndex
      ? indicators.push(
          <li key={i} id={'#'}>
            <FaCircle key={i} />
          </li>
        )
      : indicators.push(
          <li key={i} id={i.toString()} onClick={onClickIndicator}>
            <FaRegCircle />
          </li>
        );
  }
  return indicators;
}

export function Indicators({
  currentIndex,
  count,
  onClickIndicator,
}: indicatorsProps) {
  return (
    <>
      <ul>{makeIndicators(currentIndex, count, onClickIndicator)}</ul>
    </>
  );
}
