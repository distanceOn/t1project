import { PictureProps } from './types';
import { getPictureClassName, getSrcAndAlt } from './utils';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Picture = ({ size, image }: PictureProps) => {
  const className = getPictureClassName(size);
  const { src, alt } = getSrcAndAlt(image);

  return (
    <LazyLoadImage src={src} alt={alt} effect='blur' className={className} />
  );
};
