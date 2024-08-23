import './HotButton.css';

type Props = {
  buttonText: string;
  buttonColor: string;
  paragraphText: string;
  onButtonClick: () => void;
};

export function HotButton({
  buttonText,
  buttonColor,
  paragraphText,
  onButtonClick,
}: Props) {
  return (
    <>
      <button onClick={onButtonClick} className={buttonColor}>
        {buttonText}
      </button>
      <p>{paragraphText}</p>
    </>
  );
}
