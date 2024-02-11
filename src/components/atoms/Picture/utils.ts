import S from './Picture.module.scss';
import Shoes from './images/shoes.jpg';

import Choice from './images/choice.jpg';

export const getPictureClassName = (type: string) => {
  switch (type) {
    case 'small':
      return S.picture_small;
    default:
      return S.picture;
  }
};

export const getSrcAndAlt = (image: 'shoes' | 'choice') => {
  switch (image) {
    case 'shoes':
      return {
        src: Shoes,
        alt: 'shoes',
      };
    case 'choice':
      return {
        src: Choice,
        alt: 'shoe choice',
      };
  }
};
