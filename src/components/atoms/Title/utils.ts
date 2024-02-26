import S from './Title.module.scss';
import { TitleStyles } from './types';

export const titleTagMap: Record<string, keyof JSX.IntrinsicElements> = {
  large: 'h1',
  small: 'h3',
  min: 'h4',
  xmin: 'h4',
  default: 'h2',
};

export const getTitleClasses = ({ color, size }: TitleStyles) => {
  const colors = {
    white: S.color_white,
    grey: S.color_grey,
    black: S.color_black,
  };

  const sizes = {
    min: S.title_min,
    xmin: S.title_xmin,
    small: S.title_small,
    default: S.title_default,
    large: S.title_large,
  };

  if (!color || !Object.keys(colors).includes(color)) {
    throw new Error('Invalid color prop');
  }

  if (!size || !Object.keys(sizes).includes(size)) {
    throw new Error('Invalid size prop');
  }

  return {
    color: colors[color],
    size: sizes[size],
  };
};

export const getTotalTitleClassName = ({ color, size }: TitleStyles) => {
  const baseClass = S.title;
  const { color: colorClass, size: sizeClass } = getTitleClasses({
    color,
    size,
  });

  const totalClass = `${baseClass} ${colorClass} ${sizeClass}`;

  return totalClass;
};
