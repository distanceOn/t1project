import { PictureProps } from './types';
import { getPictureClassName, getSrcAndAlt } from './utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Shoes from './images/shoes.jpg';

export const Picture = ({ size, image, serverSource }: PictureProps) => {
  const className = getPictureClassName(size);

  const { src, alt } = serverSource ? serverSource : getSrcAndAlt(image);

  return (
    <LazyLoadImage
      src={src ? src : Shoes}
      alt={alt}
      effect='blur'
      className={className}
    />
  );
};
