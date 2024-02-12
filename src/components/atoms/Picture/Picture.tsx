import { getPictureClassName, getSrcAndAlt } from './utils';

type PictureProps = {
  size: 'small' | 'default' | 'large';
  image:
    | 'shoes'
    | 'choice'
    | 'andre'
    | 'anna'
    | 'fedor'
    | 'masha'
    | 'maxim'
    | 'sasha';
};

export const Picture = ({ size, image }: PictureProps) => {
  const className = getPictureClassName(size);
  const { src, alt } = getSrcAndAlt(image);

  return <img src={src} alt={alt} className={className} />;
};
