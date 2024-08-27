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
