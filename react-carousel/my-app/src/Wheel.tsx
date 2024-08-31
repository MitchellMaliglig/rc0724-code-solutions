import { Image } from './App';
import { Arrow } from './Arrow';

type wheelProps = {
  images: Image[];
  index: number;
  onLeft: () => void;
  onRight: () => void;
};

export function Wheel({ images, index, onLeft, onRight }: wheelProps) {
  return (
    <div className="top">
      <Arrow type="left" onClick={onLeft} />
      <div className="holder">
        <img src={images[index].src} alt={images[index].alt} />
      </div>
      <Arrow type="right" onClick={onRight} />
    </div>
  );
}
