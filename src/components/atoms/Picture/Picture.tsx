import { PictureProps } from './types';
import { getPictureClassName, getSrcAndAlt } from './utils';

export const Picture = ({ size, image }: PictureProps) => {
  const className = getPictureClassName(size);
  const { src, alt } = getSrcAndAlt(image);

  return <img src={src} alt={alt} className={className} />;
};
