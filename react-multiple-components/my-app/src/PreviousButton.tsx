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
