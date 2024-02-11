import S from './Picture.module.scss';
import Shoes from './images/shoes.jpg';

export const getPictureClassName = (type: string) => {
  switch (type) {
    case 'small':
      return S.picture_small;
    default:
      return S.picture;
  }
};

export const getSrcAndAlt = (image: 'shoes') => {
  switch (image) {
    case 'shoes':
      return {
        src: Shoes,
        alt: 'shoes',
      };
  }
};
