import { useEffect, useState, MouseEvent } from 'react';
import { Indicators } from './Indicators';
import { Wheel } from './Wheel';
import { Image } from './App';

type carouselProps = {
  images: Image[];
};

export function Carousel({ images }: carouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      handleRight();
    }, 3000);
    return () => clearTimeout(timerId);
  });

  function handleLeft() {
    setIndex((index - 1 + images.length) % images.length);
  }

  function handleRight() {
    setIndex((index + 1) % images.length);
  }

  function handleClickIndicator(e: MouseEvent) {
    setIndex(
      Number(
        ((e.target as HTMLElement).closest('li') as HTMLLIElement).getAttribute(
          'id'
        )
      )
    );
  }

  return (
    <>
      <Wheel
        images={images}
        index={index}
        onLeft={handleLeft}
        onRight={handleRight}
      />
      <Indicators
        currentIndex={index}
        count={images.length}
        onClickIndicator={handleClickIndicator}
      />
    </>
  );
}
