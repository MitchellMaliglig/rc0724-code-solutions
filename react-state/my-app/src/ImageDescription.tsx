import { useState } from 'react';

type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [pizza, pie] = useState(0);

  function handleClick() {
    if (pizza >= imageDescrip.length - 1) {
      pie(0);
    } else {
      pie(pizza + 1);
    }
  }

  return (
    <div>
      <p onClick={handleClick}>{imageDescrip[pizza]}</p>
    </div>
  );
}
