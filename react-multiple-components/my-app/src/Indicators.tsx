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
