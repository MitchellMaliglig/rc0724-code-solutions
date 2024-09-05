import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type arrowProps = {
  type: string;
  onClick: () => void;
};

export function Arrow({ type, onClick }: arrowProps) {
  return (
    <div className="arrow" onClick={onClick}>
      {type === 'left' && <FaArrowLeft />}
      {type === 'right' && <FaArrowRight />}
    </div>
  );
}
